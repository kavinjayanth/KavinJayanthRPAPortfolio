import { FileSpreadsheet, Mail, AppWindow, Database, Globe } from 'lucide-react';

// SAMPLE entries: one per project area from your profile.
// Titles, descriptions and tools below are starting points. Replace them with your
// real projects, and fill the outcome only with results you can stand behind.
// Remove `placeholder: true` once an entry is real (it hides the "Sample" badge).
// Set `repo` / `demo` to URLs to show those buttons.

const OUTCOME = '[Add a verified, measurable outcome, e.g. time saved, error reduction, volume handled]';

export const projects = [
  {
    id: 'excel-data-automation',
    title: 'Attestation Form Validation',
    area: 'Excel Data Automation',
    icon: FileSpreadsheet,
    summary: 'Automating repetitive Excel work: reading, validating, transforming and reporting on data.',
    problem: 'Manual validation of attestation forms was time-consuming and error-prone due to the large volume of data and complex validation rules.',
    solution: 'Developed an automation solution using AA360 to read the attestation forms, validate the data against predefined rules, moved to Excel file to Valid or Invalid folder and generate a summary report highlighting any discrepancies or errors',
    tools: ['AA360', 'Excel','SQL'],
    repo: '',
    demo: '',
  },
  {
    id: 'email-automation',
    title: 'Attestation Form Validation',
    area: 'Email Automation',
    icon: Mail,
    summary: 'Reading, classifying and responding to emails and attachments without manual handling.',
    problem: 'Manual email handling was time-consuming and prone to errors, especially when dealing with a high volume of emails and attachments.',
    solution: 'Developed an automation solution using AA360 to monitor incoming emails, calssify them whether it is valid or invalid, extract relevant information from attachments',  
    tools: ['AA360', 'Excel','SQL'],
    repo: '',
    demo: '',
    
  },
  {
    id: 'Application-automation',
    title: 'PresoVal Tool Automation',
    area: 'Application Automation',
    icon: AppWindow,
    summary: 'Migrated a Tool From .Net to Uipath and automated the file processing ',
    problem: 'Need a tool to Automate Rumba application for Medical and Hospital Claims Processing',
    solution: 'Developed an automation solution using UiPath to automate the PresoVal Tool, which involved automating the Rumba application for processing medical and hospital claims. The automation handled data entry, validation, and report generation, significantly reducing manual effort and processing time.',
    tools: ['UiPath', 'VB.Net','.Net'],
    repo: '',
    demo: '',
    
  },
  {
    id: 'database-automation',
    title: 'RPA Dashboard Monitoring',
    area: 'Database Automation',
    icon: Database,
    summary: 'Automated the monitoring of RPA dashboards and database using SQL queries and UiPath workflows.',
    problem: 'Manual monitoring of RPA dashboards and databases was time-consuming and prone to errors, especially when dealing with large volumes of data and complex queries.',
    solution: 'Implemented SQL queries for data extraction and validation, integrated with UiPath workflows for automated monitoring and logging.',
    tools: ['SQL', 'UiPath'],
    repo: '',
    demo: '',
    
  },
  {
    id: 'web-automation',
    title: 'Web CCI Portal Automation',
    area: 'Web Automation',
    icon: Globe,
    summary: 'Automating browser-based tasks such as data entry, extraction and portal workflows.',
    problem: 'Need to Retrieve the Information from the CCI Portal and get the ID cards for Each Control Id',
    solution: 'Developed an automation solution using Selenium and Python to automate the retrieval of information from the CCI Portal, including data entry, extraction, and ID card generation for each control ID.',
    tools: ['Python', 'Selenium', 'AI'],
    repo: '',
    demo: '',
    
  },
];
