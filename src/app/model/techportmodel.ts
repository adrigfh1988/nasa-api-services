export interface Techportmodel {

    project: Project;
}

interface Project {

    id: number;
    lastUpdated: string;
    title: string;
    status: string;
    startDate: string;
    endDate: string;
    description: string;
    benefits: string;
    technologyMaturityStart: string;
    technologyMaturityCurrent: string;
    technologyMaturityEnd: string;
    responsibleProgram: string;
    responsibleMissionDirectorateOrOffice: string;
    leadOrganization: LeadOrganization;
    workLocations: Array<string>;
    programDirectors: Array<string>;
    programManagers: Array<string>;
    projectManagers: Array<string>;
    principalInvestigators: Array<string>;
    libraryItems: Array<LibraryItems>;
    closeoutDocuments: Array<string>;
    supportingOrganizations: Array<SupportingOrganization>
    primaryTas: Array<PrimaryTa>;
    additionalTas: Array<any>;

}

interface LeadOrganization {
    name: string;
    type: string;
    acronym: string;
    city: string;
    state: string;
    country: string;
}

interface LibraryItems {
    id: number;
    title: string;
    type: string;
    description: string;
    externalUrl: any;
    publishedBy: any;
    publishedDate: any;
    files: Array<FileTechPort>;

}

interface FileTechPort {

    id: number;
    url: string;
    size: number;
}

interface SupportingOrganization {

    name: string;
    type: string;
    acronym: any;
    city: string;
    state: string;
    country: string;

}

interface PrimaryTa {
    id: number;
    code: string;
    title: string;
    priority: any;
}
