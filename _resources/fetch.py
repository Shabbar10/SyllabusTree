from flask import Flask, jsonify
from googleapiclient.discovery import build
from googleapiclient.errors import HttpError

app = Flask(__name__)



API_KEY = "AIzaSyB6HWw5BdNn6EhAu5Pc8k6oebNPDrdvfq8"

@app.route("/")
def hello_world():
    return "<p>enter topic name</p>"

def get_youtube_service():
    return build('youtube', 'v3', developerKey=API_KEY)

# function to get video IDs by topic
def get_video_ids_by_topic(youtube, topic, max_results=5):
    video_list = []
    request = youtube.search().list(
        part='snippet',
        q=topic,
        type='video',
        maxResults=max_results,
    )
    response = request.execute()

    for item in response['items']:
        video_list.append(item['id']['videoId'])

    return video_list

# for fetching video info and comments and returning json
@app.route("/<topic>", methods=["POST"])
def search_results(topic):
    print("Aight searching")
    youtube = get_youtube_service()

    # Fetch video IDs based on the topic
    video_list = get_video_ids_by_topic(youtube, topic)

    # Fetch video info using the video IDs
    video_data_list = video_info(youtube, video_list)

    # Fetch comments for the videos
    comments_dict = fetch_video_comments2(youtube, video_list)

    # Combine video info and comments into a single response
    combined_data = []
    for video_data in video_data_list:
        video_id = video_data['videoId']
        video_data['comments'] = comments_dict.get(video_id, [])
        combined_data.append(video_data)

    return jsonify(combined_data)

def video_info(youtube, video_ids):
    data_list = []
    for video_id in video_ids:
        request = youtube.videos().list(
            part='snippet,statistics,contentDetails',
            id=video_id
        )
        response = request.execute()

        # Extract relevant video data
        video_data = response['items'][0]
        thumbnails = video_data['snippet']['thumbnails']
        thumbnail_url = thumbnails.get('maxres', thumbnails.get('high', thumbnails.get('medium', thumbnails.get('default'))))['url']
        data = {
            "videoId": video_id,
            "title": video_data['snippet']['title'],
            "description": video_data['snippet']['description'],
            "views": video_data['statistics'].get('viewCount', '0'),
            "likes": video_data['statistics'].get('likeCount', '0'),
            "tags": video_data['snippet'].get('tags', []),
            "url": f"https://www.youtube.com/watch?v={video_id}",
            "channel_title": video_data['snippet'].get("channelTitle", ""),
            "duration": video_data['contentDetails']['duration'],
            "publishedAt": video_data['snippet']['publishedAt'],
            "thumbnail": thumbnail_url
        }
        
        data_list.append(data)
    
    return data_list

def fetch_video_comments2(youtube, video_ids):
    video_comments_dict = {}

    for video_id in video_ids:
        try:
           
            request = youtube.commentThreads().list(
                part='snippet',
                videoId=video_id,
                textFormat='plainText',
                maxResults=100 
            )

            response = request.execute()

            comments_list = [] 

            for item in response.get('items', []):
                comment = item['snippet']['topLevelComment']['snippet']
                comments_list.append(comment['textDisplay'])  

            video_comments_dict[video_id] = comments_list

        except HttpError as e:
            print(f"Error fetching comments for video {video_id}: {e}")
            continue

        except Exception as e:
            print(f"An unexpected error occurred for video {video_id}: {e}")
            continue

    return video_comments_dict

if __name__ == "__main__":
    app.run(host='0.0.0.0', port=5000, debug=True)
