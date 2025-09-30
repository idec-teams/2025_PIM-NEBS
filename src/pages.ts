import {
  Home,
  Members,
  Attributions,
  Description,
  Report,
  Information,
  Notebook,
  ResultsAI,
  ResultsWetLab,
  Safety,
  Protocol,
  Model,
  Experiments,
  Contribution,
  Design,
  Engineering
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
        title: "Meet the team",
        path: "/team",
        component: Members,
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
        title: "Description",
        path: "/description",
        component: Description,
        lead: "",
        banner: "images/description/banner.webp",
      },
      {
        name: "Design",
        title: "Design",
        path: "/design",
        component: Design,
        lead: "",
        banner: "images/design/banner.png",
      },
      {
        name: "Model",
        title: "Model",
        path: "/model",
        component: Model,
        lead: "",
        banner: "images/model/banner.png",
      },
      {
        name: "Engineering",
        title: "Engineering",
        path: "/engineering",
        component: Engineering,
        lead: "",
        banner: "images/engineering/banner.webp",
      },
      {
        name: "Experiments",
        title: "Experiments",
        path: "/experiments",
        component: Experiments,
        lead: "",
        banner: "images/experiments/banner.png",
      },
      {
        name: "Results AI",
        title: "Results AI",
        path: "/results-ai",
        component: ResultsAI,
        lead: "",
        banner: "images/results-ai/banner.webp",
      },
      {
        name: "Results Wet Lab",
        title: "Results Wet Lab",
        path: "/results-wet-lab",
        component: ResultsWetLab,
        lead: "",
        banner: "images/results-wet-lab/banner.webp",
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
      {
        name: "Contribution",
        title: "Contribution",
        path: "/contribution",
        component: Contribution,
        lead: "",
        banner: "images/contribution/banner.png",
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
        banner: "images/safety/banner.webp",
      },
      {
        name: "Protocol",
        title: "Protocol",
        path: "/protocol",
        component: Protocol,
        lead: "",
        banner: "images/protocol/banner.png",
      },
    ],
  }
];

export default Pages;
