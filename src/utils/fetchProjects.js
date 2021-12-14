const log = console.log;
var user = "MehdiMahmud79";

export const fetchProjects = async (url) => {
  try {
    let projectData = await fetch(url);
    const data = await projectData.json();
    return data;
  } catch (err) {
    console.error(`Error: ${err}`);
  }
};

export const fetchApi = async (projectsUrl) => {
  var projects = [];

  const Data = await fetchProjects(projectsUrl);
  const projectsData = Data.sort((a, b) =>
    a.created_at < b.created_at ? 1 : b.created_at < a.created_at ? -1 : 0
  );
  //   log("Your projects on Gitgub were \n", projectsData);

  projects = await projectsData.map(
    async ({
      name: projectName,
      owner,
      description,
      languages_url,
      homepage,
    }) => {
      if (!homepage)
        homepage = `https://${owner.login}.github.io/${projectName}/`;
      const gitHub_Url = `${owner.html_url}/${projectName}`;
      const project_img = `https://github.com/${owner.login}/${projectName}/blob/main/assets/screen.gif?raw=true`;

      const languages = await fetchProjects(languages_url);

      return {
        projectName,
        gitHub_Url,
        homepage,
        description,
        project_img,
        languages,
      };
    }
  );

  projects = await Promise.all(projects);
  //   log(projects);
  // finned pinned Repos
  const pinnedUrl = `https://gh-pinned-repos-5l2i19um3.vercel.app/?username=${user}`;
  const pinnedRepos = await fetchProjects(pinnedUrl);
  // log("pinned repos are ",pinnedRepos)
  const pinned = pinnedRepos.map((proj) => proj.repo);

  let favProjects = projects.filter((repo) =>
    pinned.includes(repo.projectName)
  );
  //   log("pinned repos are ", favProject);

  let oldProjects = projects.filter(
    (repo) => !pinned.includes(repo.projectName)
  );
  //   log("older repos are ", oldProjects);
  return { oldProjects, favProjects };
};
