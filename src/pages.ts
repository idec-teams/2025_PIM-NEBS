import {
  Home,
  Members,
  Attributions,
  Description,
  Report,
  Information,
  Notebook,
  Results,
  Safety,
  Protocol
} from "./contents";

interface Base {
  name: string | undefined;
}

class Folder implements Base {
  name: string | undefined;
  folder: Page[] | undefined;
}

class Page implements Base {
  name: string | undefined;
  title: string | undefined;
  path: string | undefined;
  banner?: string | undefined;
  component: React.FC | undefined;
  lead: string | undefined;
  hideBanner?: boolean | undefined;
}

const Pages: (Page | Folder)[] = [
  {
    name: "Home",
    title: "Home",
    path: "/",
    component: Home,
    hideBanner: true,
    lead: "",
  },
  {
    name: "Team",
    folder: [
      {
        name: "Members",
        title: "Team Members",
        path: "/team",
        component: Members,
        hideBanner: true,
        lead: "",
      },
      {
        name: "Attributions",
        title: "Attributions",
        path: "/attributions",
        component: Attributions,
        lead: "",
      },
    ],
  },
  {
    name: "Project",
    folder: [
      {
        name: "Description",
        title: "Project Description",
        path: "/description",
        component: Description,
        lead: "",
      },
      {
        name: "Results",
        title: "Results",
        path: "/results",
        component: Results,
        lead: "",
      },
      {
        name: "Report",
        title: "Report",
        path: "/report",
        component: Report,
        lead: "",
      },
      {
        name: "Supplementary information",
        title: "Supplementary information",
        path: "/information",
        component: Information,
        lead: "",
      },
    ],
  },
  {
    name: "Documentation",
    folder: [
      {
        name: "Notebook",
        title: "Notebook",
        path: "/notebook",
        component: Notebook,
        lead: "",
      },
      {
        name: "Safety",
        title: "Safety",
        path: "/safety",
        component: Safety,
        lead: "",
      },
      {
        name: "Protocol",
        title: "Protocol",
        path: "/protocol",
        component: Protocol,
        lead: "",
      },
    ],
  }
];

export default Pages;
