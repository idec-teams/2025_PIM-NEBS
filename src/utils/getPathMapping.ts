import pages from "../pages.js";

export const getPathMapping = () => {
  return pages.reduce<{
    [key: string]: {
      name: string | undefined;
      title: string | undefined;
      banner?: string | undefined;
      component: React.FC;
      lead: string | undefined;
      hideBanner?: boolean | undefined;
    };
  }>((map, item) => {
    if ("path" in item && item.path && item.component) {
      map[item.path] = {
        name: item.name,
        title: item.title,
        banner: item.banner,
        component: item.component,
        lead: item.lead,
        hideBanner: item.hideBanner,
      };
    } else if ("folder" in item && item.folder) {
      item.folder.forEach((page) => {
        if (page.path && page.component) {
          map[page.path] = {
            name: page.name,
            title: page.title,
            banner: page.banner,
            component: page.component,
            lead: page.lead,
            hideBanner: page.hideBanner,
          };
        }
      });
    }
    return map;
  }, {});
};
