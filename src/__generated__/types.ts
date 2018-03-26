/* tslint:disable */
//  This file was automatically generated and should not be edited.

export interface GetProjectQueryVariables {
  projectName: string,
};

export interface GetProjectQuery {
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
    } | null,
  } | null,
};
