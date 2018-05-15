/* tslint:disable */
//  This file was automatically generated and should not be edited.

export interface getAboutQueryVariables {
  userName: string,
};

export interface getAboutQuery {
  // The user query
  user:  {
    __typename: "UserQuery",
    // This is user.
    get:  {
      __typename: "User",
      // The user name.
      name: string | null,
      // The user userName.
      userName: string | null,
      // The user title.
      title: string | null,
      // The user description.
      description: Array< string | null > | null,
    } | null,
  } | null,
};

export interface listAboutQuery {
  // The user query
  user:  {
    __typename: "UserQuery",
    // This is user.
    list:  Array< {
      __typename: "User",
      // The user name.
      name: string | null,
      // The user userName.
      userName: string | null,
      // The user title.
      title: string | null,
    } | null > | null,
  } | null,
};

export interface getHelpQueryVariables {
  helpType: string,
};

export interface getHelpQuery {
  // The root commands help
  help:  {
    __typename: "HelpQuery",
    // Help feature
    get:  {
      __typename: "Help",
      // The usage of feature help command
      usage: string | null,
      // Help content features
      content: Array< string | null > | null,
    } | null,
  } | null,
};

export interface listHelpQuery {
  // The root commands help
  help:  {
    __typename: "HelpQuery",
    // Help feature
    list:  Array< {
      __typename: "Help",
      // The type of the feature
      type: string | null,
      // The description of the feature help
      description: string | null,
      // The usage of feature help command
      usage: string | null,
      // Help content features
      content: Array< string | null > | null,
    } | null > | null,
  } | null,
};

export interface getProjectQueryVariables {
  projectName: string,
};

export interface getProjectQuery {
  // The projects base query
  project:  {
    __typename: "ProjectQuery",
    // Personal or work developed project.
    get:  {
      __typename: "Project",
      // The name of the project.
      name: string | null,
      // The homepage of the project.
      homepage: string | null,
      // The released data of the project.
      releaseDate: string | null,
      // Details of the project specifications.
      details: string | null,
    } | null,
  } | null,
};

export interface listProjectsQuery {
  // The projects base query
  project:  {
    __typename: "ProjectQuery",
    // Personal or work developed project.
    list:  Array< {
      __typename: "Project",
      // The name of the project.
      name: string | null,
      // The homepage of the project.
      homepage: string | null,
      // The released data of the project.
      releaseDate: string | null,
      // The description of the project.
      description: string | null,
    } | null > | null,
  } | null,
};
