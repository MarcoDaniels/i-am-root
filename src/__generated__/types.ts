/* tslint:disable */
//  This file was automatically generated and should not be edited.

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

export interface helpProjectQuery {
  // The projects base query
  project:  {
    __typename: "ProjectQuery",
    // Help feature
    help:  {
      __typename: "Help",
      // The usage of help command
      usage: string | null,
      // Help content features
      content: Array< string | null > | null,
    } | null,
  } | null,
};
