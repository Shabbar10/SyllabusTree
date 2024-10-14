// navigationData.ts
import { v4 as uuidv4 } from "uuid";

export interface NavItem {
  id: string;
  label: string;
  send: string;
  links?: NavItem[];
}

export const navigationData: NavItem[] =
[
  {
    id: uuidv4(),
    label: "SEM 2",
    send: "",
    links: [
      {
        id: uuidv4(),
        label: "CHEM",
        send: "",
        links: [
          { id: uuidv4(), label: "unit 1", send: "chem1" },
          { id: uuidv4(), label: "unit 2", send: "chem2" },
          { id: uuidv4(), label: "unit 3", send: "chem3" },
          { id: uuidv4(), label: "unit 4", send: "chem4" },
          { id: uuidv4(), label: "unit 5", send: "chem5" },
          { id: uuidv4(), label: "unit 6", send: "chem6" },
        ],
      },
      {
        id: uuidv4(),
        label: "DDCA",
        send: "",
        links: [
          { id: uuidv4(), label: "unit 1", send: "ddca1" },
          { id: uuidv4(), label: "unit 2", send: "ddca2" },
          { id: uuidv4(), label: "unit 3", send: "ddca3" },
          { id: uuidv4(), label: "unit 4", send: "ddca4" },
          { id: uuidv4(), label: "unit 5", send: "ddca5" },
        ],
      },
      {
        id: uuidv4(),
        label: "DMGT",
        send: "",
        links: [
          { id: uuidv4(), label: "unit 1", send: "dmgt1" },
          { id: uuidv4(), label: "unit 2", send: "dmgt2" },
          { id: uuidv4(), label: "unit 3", send: "dmgt3" },
          { id: uuidv4(), label: "unit 4", send: "dmgt4" },
          { id: uuidv4(), label: "unit 5", send: "dmgt5" },
          { id: uuidv4(), label: "unit 6", send: "dmgt6" },
        ],
      },
      {
        id: uuidv4(),
        label: "MECH",
        send: "",
        links: [
          { id: uuidv4(), label: "unit 1", send: "mech1" },
          { id: uuidv4(), label: "unit 2", send: "mech2" },
          { id: uuidv4(), label: "unit 3", send: "mech3" },
          { id: uuidv4(), label: "unit 4", send: "mech4" },
          { id: uuidv4(), label: "unit 5", send: "mech5" },
          { id: uuidv4(), label: "unit 6", send: "mech6" },
        ],
      },
      {
        id: uuidv4(),
        label: "OOP",
        send: "",
        links: [
          { id: uuidv4(), label: "unit 1", send: "oop1" },
          { id: uuidv4(), label: "unit 2", send: "oop2" },
          { id: uuidv4(), label: "unit 3", send: "oop3" },
          { id: uuidv4(), label: "unit 4", send: "oop4" },
        ]
      }
    ]
  },
  {
    id: uuidv4(),
    label: "SEM 3",
    send: "",
    links: [
      {
        id: uuidv4(),
        label: "DBMS",
        send: "",
        links: [
          {id: uuidv4(), label: "unit 1", send: "dbms1"},
          {id: uuidv4(), label: "unit 2", send: "dbms2"},
          {id: uuidv4(), label: "unit 3", send: "dbms3"},
          {id: uuidv4(), label: "unit 4", send: "dbms4"},
          {id: uuidv4(), label: "unit 5", send: "dbms5"},
        ],
      },
      {
        id: uuidv4(),
        label: "FDS",
        send: "",
        links: [
          {id: uuidv4(), label: "unit 1", send: "fds1"},
          {id: uuidv4(), label: "unit 2", send: "fds2"},
          {id: uuidv4(), label: "unit 3", send: "fds3"},
          {id: uuidv4(), label: "unit 4", send: "fds4"},
          {id: uuidv4(), label: "unit 5", send: "fds5"},
        ],
      },
      {
        id: uuidv4(),
        label: "MMC",
        send: "",
        links: [
          {id: uuidv4(), label: "unit 1", send: "mmc1"},
          {id: uuidv4(), label: "unit 2", send: "mmc2"},
          {id: uuidv4(), label: "unit 3", send: "mmc3"},
          {id: uuidv4(), label: "unit 4", send: "mmc4"},
          {id: uuidv4(), label: "unit 5", send: "mmc5"},
        ],
      },
      {
        id: uuidv4(),
        label: "OS",
        send: "",
        links: [
          {id: uuidv4(), label: "unit 1", send: "os1"},
          {id: uuidv4(), label: "unit 2", send: "os2"},
          {id: uuidv4(), label: "unit 3", send: "os3"},
          {id: uuidv4(), label: "unit 4", send: "os4"},
          {id: uuidv4(), label: "unit 5", send: "os5"},
        ],
      },
    ]
  },
  {
    id: uuidv4(),
    label: "SEM 4",
    send: "",
    links: [
      {
        id: uuidv4(),
        label: "ADS",
        send: "",
        links: [
          {id: uuidv4(), label: "unit 1", send: "ads1"},
          {id: uuidv4(), label: "unit 2", send: "ads2"},
          {id: uuidv4(), label: "unit 3", send: "ads3"},
          {id: uuidv4(), label: "unit 4", send: "ads4"},
          {id: uuidv4(), label: "unit 5", send: "ads5"},
        ],
      },
      {
        id: uuidv4(),
        label: "CN",
        send: "",
        links: [
          {id: uuidv4(), label: "unit 1", send: "cn1"},
          {id: uuidv4(), label: "unit 2", send: "cn2"},
          {id: uuidv4(), label: "unit 3", send: "cn3"},
          {id: uuidv4(), label: "unit 4", send: "cn4"},
          {id: uuidv4(), label: "unit 5", send: "cn5"},
        ],
      },
      {
        id: uuidv4(),
        label: "PS",
        send: "",
        links: [
          {id: uuidv4(), label: "unit 1", send: "ps1"},
          {id: uuidv4(), label: "unit 2", send: "ps2"},
          {id: uuidv4(), label: "unit 3", send: "ps3"},
          {id: uuidv4(), label: "unit 4", send: "ps4"},
          {id: uuidv4(), label: "unit 5", send: "ps5"},
        ],
      },
      {
        id: uuidv4(),
        label: "SEPM",
        send: "",
        links: [
          {id: uuidv4(), label: "unit 1", send: "sepm1"},
          {id: uuidv4(), label: "unit 2", send: "sepm2"},
          {id: uuidv4(), label: "unit 3", send: "sepm3"},
          {id: uuidv4(), label: "unit 4", send: "sepm4"},
          {id: uuidv4(), label: "unit 5", send: "sepm5"},
        ],
      },
      {
        id: uuidv4(),
        label: "DAA",
        send: "",
        links: [
          {id: uuidv4(), label: "unit 1", send: "daa1"},
          {id: uuidv4(), label: "unit 2", send: "daa2"},
          {id: uuidv4(), label: "unit 3", send: "daa3"},
          {id: uuidv4(), label: "unit 4", send: "daa4"},
          {id: uuidv4(), label: "unit 5", send: "daa5"},
        ],
      },
    ]
  },
  {
    id: uuidv4(),
    label: "SEM 5",
    send: "",
    links: [
      {
        id: uuidv4(),
        label: "AIES",
        send: "",
        links: [
          {id: uuidv4(), label: "unit 1", send: "aies1"},
          {id: uuidv4(), label: "unit 2", send: "aies2"},
          {id: uuidv4(), label: "unit 3", send: "aies3"},
          {id: uuidv4(), label: "unit 4", send: "aies4"},
          {id: uuidv4(), label: "unit 5", send: "aies5"},
        ],
      },
      {
        id: uuidv4(),
        label: "DE",
        send: "",
        links: [
          {id: uuidv4(), label: "unit 1", send: "de1"},
          {id: uuidv4(), label: "unit 2", send: "de2"},
          {id: uuidv4(), label: "unit 3", send: "de3"},
          {id: uuidv4(), label: "unit 4", send: "de4"},
          {id: uuidv4(), label: "unit 5", send: "de5"},
        ],
      },
      {
        id: uuidv4(),
        label: "ICS",
        send: "",
        links: [
          {id: uuidv4(), label: "unit 1", send: "ics1"},
          {id: uuidv4(), label: "unit 2", send: "ics2"},
          {id: uuidv4(), label: "unit 3", send: "ics3"},
          {id: uuidv4(), label: "unit 4", send: "ics4"},
          {id: uuidv4(), label: "unit 5", send: "ics5"},
        ],
      },
      {
        id: uuidv4(),
        label: "FSD",
        send: "fsd",
      },
      {
        id: uuidv4(),
        label: "BDT",
        send: "",
        links: [
          {id: uuidv4(), label: "unit 1", send: "bdt1"},
          {id: uuidv4(), label: "unit 2", send: "bdt2"},
          {id: uuidv4(), label: "unit 3", send: "bdt3"},
          {id: uuidv4(), label: "unit 4", send: "bdt4"},
          {id: uuidv4(), label: "unit 5", send: "bdt5"},
        ],
      },
    ]
  },

];
