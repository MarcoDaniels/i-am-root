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
    },
  } | null,
};

export interface listAboutQuery {
  // The user query
  user:  {
    __typename: "UserQuery",
    // Collection of data objects and metadata for User.
    list:  {
      __typename: "UserCollection",
      // This is user.
      data:  Array< {
        __typename: "User",
        // The user name.
        name: string | null,
        // The user userName.
        userName: string | null,
        // The user title.
        title: string | null,
      } | null > | null,
    },
  } | null,
};

export interface getAboutWorkQueryVariables {
  userName: string,
};

export interface getAboutWorkQuery {
  // The user query
  user:  {
    __typename: "UserQuery",
    // This is user.
    get:  {
      __typename: "User",
      // Work experience.
      experience:  Array< {
        __typename: "Experience",
        // The position name.
        position: string | null,
        // The workplace name.
        workplace: string | null,
        // The start date of the experience.
        from: string | null,
        // The end date of the experience.
        to: string | null,
        // The city or/and country.
        location: string | null,
        // Details of the experience.
        details: Array< string | null > | null,
      } | null > | null,
    },
  } | null,
};

export interface getHelpQueryVariables {
  helpType: string,
};

export interface getHelpQuery {
  // The root commands help
  help:  {
    __typename: "HelpQuery",
    // Help feature for CLI
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
    // Help feature for CLI
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
      // The description of the project.
      description: string | null,
      // Details of the project specifications.
      details: Array< string | null > | null,
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

export interface loadAppQuery {
  // The user query
  user:  {
    __typename: "UserQuery",
    // This is user.
    get:  {
      __typename: "User",
      // The user name.
      name: string | null,
      // The user welcome message.
      welcomeMessage: Array< string | null > | null,
    },
  } | null,
};
