// ============================================================
// projectsData.js — Single source of truth for all portfolio data
// Edit this file to add, remove, or update projects, skills, and experience.
// ============================================================

import nusadataDashboard from "../assets/images/nusadata/nusadata.png";
import nusadataFigma from "../assets/images/nusadata/design-figma.png";
import nusadataData from "../assets/images/nusadata/raw-data.png";
import nusadataDashboardDraft from "../assets/images/nusadata/dashboard-draft.png";
// NutriLink project images
import nutrilinkThumbnail from "../assets/images/NutriLink/thumbnail.png";
import nutrilinkFigma from "../assets/images/NutriLink/figma.png";
import nutrilinkData from "../assets/images/NutriLink/firestore.png";
import nutrilinkGit from "../assets/images/NutriLink/merge_branch.png";
import nutrilinkCode from "../assets/images/NutriLink/schedule_page.png";
import nutrilinkArchi from "../assets/images/NutriLink/system_flow_archi.png";
import nutrilinkResult from "../assets/images/NutriLink/result.png";
import nutrilinkMigration from "../assets/images/NutriLink/migration.png";
// presisi project images
import presisiFigma from "../assets/images/Presisi/figma.png";
import presisiResult from "../assets/images/Presisi/result.png";
import presisiDesign from "../assets/images/Presisi/design.png";
import presisiThumbnail from "../assets/images/Presisi/thumbnail.png";
// PinjamBuku project images
import pinjamBukuBooklist from "../assets/images/pinjamBuku/booklist.png";
import pinjamBukuCart from "../assets/images/pinjamBuku/Cart.png";
import pinjamBukuRegister from "../assets/images/pinjamBuku/Register.png";
import pinjamBukuLogin from "../assets/images/pinjamBuku/Login.png";
import pinjamBukuThumbnail from "../assets/images/pinjamBuku/thumbnail.png";
// student performance project images
import datalakehouseErd from "../assets/images/data-lakehouse/Academic_Data_Warehouse_Schema_(ERD).png";
import datalakehouseDataModel from "../assets/images/data-lakehouse/Data_Warehouse_Schema_Academic_Data_Model.png";
import datalakehouseEtl from "../assets/images/data-lakehouse/Pentaho_ETL_Dim_matkul_Workflow.png";
import datalakehouseEtlSqlQuery from "../assets/images/data-lakehouse/ETL_SQL_Query_Dim_Status_Lulus_Grade_Count.png";
import datalakehouseEtlPipeline from "../assets/images/data-lakehouse/ETL_Pipeline_Fact_Nilai_Mahasiswa.png";
import datalakehouseThumbnail from "../assets/images/data-lakehouse/thumbnail.png";
// network project images
import networkThumbnail from "../assets/images/cisco/thumbnail.png";
import networkAcl from "../assets/images/cisco/standart-ACL.png";
import networkDhcp from "../assets/images/cisco/DHCP.png";
import networkRoute from "../assets/images/cisco/name_route.png";
import networkVlan from "../assets/images/cisco/show_vlan.png";
import networkDhcpReq from "../assets/images/cisco/dhcp_req.png";
import networkDhcpPool from "../assets/images/cisco/dhcp_pool.png";
import networkDetailPc from "../assets/images/cisco/detail_pc.png";
//experience project images
import iseExperienceImage from "../assets/images/experience/ise_event.JPG";
import iseExperienceImage1 from "../assets/images/experience/ise_event2.jpeg";
import iseExperienceImage2 from "../assets/images/experience/ise_event3.jpeg";
import iseExperienceImage3 from "../assets/images/experience/ise_event5.jpeg";
import gemastikExperienceImage from "../assets/images/experience/gemastik.jpeg";
import presisiExperienceImage1 from "../assets/images/experience/gemastik_1.jpeg";
import ilitsExperienceImage from "../assets/images/experience/visit_ilits.jpg";
import avalonExperienceImage from "../assets/images/experience/avalon.jpeg";
// order fulfillment project images
import orderFulfillmentThumbnail from "../assets/images/BPMN/thumbnail.png";
// dapuRame project images
import dapuRameThumbnail from "../assets/images/dapurame/thumbnail.png";
import dapuRameFigma from "../assets/images/dapurame/figma.png";
import dapuRameResult from "../assets/images/dapurame/result.png";
// netflixers project images
import netflixersThumbnail from "../assets/images/netflixers/thumbnail.png";
import netflixersSeqDiagram from "../assets/images/netflixers/SequenceDiagram_Notification.jpg";
import netflixersRobustDiagramNotif from "../assets/images/netflixers/RobustnessDiagram_NotificationNetflixers.jpg";
import netflixersDomainModel from "../assets/images/netflixers/Netflixers_DomainModel.jpg";
import netflixersRobustDiagramLogOut from "../assets/images/netflixers/RobustnessDiagram_LogOutNetflixers.png";
import netflixersRobustDiagramEditAkun from "../assets/images/netflixers/RobustnessDiagram_ProsesEditAkunNetflixers.png";
import netflixersError from "../assets/images/netflixers/error.png";
import netflixersInspect from "../assets/images/netflixers/inspect.png";
import netflixersNotification from "../assets/images/netflixers/notification_process.png";
// sql and excel analysis project images\
import sqlExcelThumbnail from "../assets/images/sql_excel/thumbnail.png";
import sqlAnalysisQueryResult1 from "../assets/images/sql_excel/1.png";
import sqlAnalysisQueryResult2 from "../assets/images/sql_excel/2.png";
import sqlAnalysisQueryResult3 from "../assets/images/sql_excel/3.png";
import sqlAnalysisQueryResult4 from "../assets/images/sql_excel/4.png";
import sqlAnalysisQueryResult5 from "../assets/images/sql_excel/5.png";
import excelAnalysisResult1 from "../assets/images/sql_excel/vlookup.png";
import excelAnalysisResult2 from "../assets/images/sql_excel/output.png";

export const projects = [
  {
    id: 1,
    title: "NusaData Explorer",
    shortDescription:
      "BPS case study: integrating 5+ datasets into an interactive data exploration dashboard using Google Looker Studio.",
    category: "Data Analytics",
    techStack: ["Looker Studio", "Python", "Pandas", "Excel", "SQL"],
    thumbnail: nusadataDashboard,
    color: "#3b82f6", // accent color for placeholder
    detail: {
      problem:
        "BPS (Badan Pusat Statistik) data is scattered across multiple sources and formats, making it difficult for analysts and policymakers to gain quick insights.",
      objective:
        "Integrate and standardize 5+ BPS datasets and build an interactive dashboard to support data-driven decision making.",
      process:
        "Collected raw datasets from BPS portal → Cleaned and standardized using Python & Pandas → Built relational data model → Designed and published interactive dashboard on Google Looker Studio.",
      tools: [
        "Data Ingestion",
        "Data Cleaning",
        "Google Looker Studio",
        "Spreadsheet",
        "Data Blending",
        "Data Visualization",
      ],
      keyContributions: [
        "Integrated 5+ heterogeneous datasets into a unified data model",
        "Automated data cleaning pipeline using Python & Pandas",
        "Designed interactive visualizations for demographic and economic indicators",
        "Documented data lineage and standardization methodology",
      ],
      results:
        "Delivered a fully interactive Looker Studio dashboard enabling exploration of multi-dimensional BPS data with filters by region, year, and indicator category.",
      progressImages: [nusadataData, nusadataFigma, nusadataDashboardDraft],
      resultImage: nusadataDashboard,
    },
  },
  {
    id: 2,
    title: "NutriLink Mobile App",
    shortDescription:
      "Flutter + Firebase mobile app for nutrition tracking with AI-powered meal scheduling, BMI/BMR/TDEE calculator, and macro breakdown.",
    category: "Flutter",
    techStack: ["Flutter", "Firebase", "Figma", "Python", "Gemini AI"],
    thumbnail: nutrilinkThumbnail,
    color: "#6366f1",
    detail: {
      problem:
        "People struggle to track their nutritional intake and understand their personal caloric needs without a personalized, easy-to-use mobile tool.",
      objective:
        "Build a cross-platform mobile application that calculates BMI, BMR, TDEE, and provides AI-powered meal scheduling with macro breakdown.",
      process:
        "Designed UI/UX in Figma → Developed Flutter app with Firebase backend → Integrated Gemini AI API for intelligent meal suggestions → Implemented nutrition calculation algorithms → Conducted usability testing.",
      tools: [
        "Flutter",
        "Dart",
        "Firebase",
        "Figma",
        "Python",
        "Gemini AI API",
      ],
      keyContributions: [
        "Prepared Software Requirements Specification (SRS) documentation to define system requirements and functional specifications.",
        "Developed the Meal Scheduler feature, covering UI/UX design in Figma and Flutter implementation.",
        "Developed a Python-based data migration process to transfer 85 menu items from local Excel files to Firebase Storage.",
      ],
      results:
        "Functional cross-platform mobile app with real-time nutrition tracking, AI meal recommendations, and persistent user profiles via Firebase.",
      progressImages: [
        nutrilinkArchi,
        nutrilinkFigma,
        nutrilinkData,
        nutrilinkCode,
        nutrilinkGit,
        nutrilinkMigration,
      ],
      resultImage: nutrilinkResult,
      githubLink: "https://github.com/airawa23/CAPS-2-2025",
      demoLink: "https://intip.in/prototypeNutriLink/",
    },
  },
  {
    id: 3,

    title: "Sales & Transaction Data Analysis",

    shortDescription:
      "Analyzed sales and transaction data using SQL and Excel to identify high-value customers, evaluate sales performance, and uncover business insights from transactional data.",

    category: "Data Analytics",

    techStack: [
      "Data Analytics",
      "Microsoft Excel",
      "SQL",
      "PostgreSQL",
      "DBeaver",
      "PivotTable",
      "VLOOKUP",
      "XLOOKUP",
      "Data Cleaning",
      "Data Aggregation",
      "Data Filtering",
      "Data Joining",
    ],

    thumbnail: sqlExcelThumbnail,

    color: "#3b82f6",

    detail: {
      problem:
        "The datasets contain transactional, customer, product, sales, and shipping information that can be analyzed to understand customer spending behavior, product performance, sales distribution, and operational costs. Without proper analysis, it can be difficult to identify high-value customers, evaluate sales performance, and extract meaningful business insights from raw data.",

      objective:
        "Analyzed 10,000+ transactional and sales data using SQL and Microsoft Excel to identify high-value customers, evaluate sales and product performance, analyze shipping costs, and derive actionable business insights.",

      process:
        "Data exploration → Data cleaning and transformation → SQL transaction analysis → Customer spending analysis → Product and shipping analysis → Excel lookup and PivotTable analysis → Sales performance comparison → Business insight generation.",

      tools: [
        "Microsoft Excel",
        "SQL",
        "PostgreSQL",
        "DBeaver",
        "PivotTable",
        "VLOOKUP",
        "XLOOKUP",
        "Data Cleaning",
        "Data Aggregation",
        "Data Filtering",
        "Data Joining",
      ],

      title: "SQL & Excel Sales Analysis",

      description:
        "Analyzed 10,000+ transaction records using PostgreSQL and Microsoft Excel to identify high-value customers, evaluate sales performance, and uncover business insights.",

      keyContributions: [
        "Analyzed 10,000+ transaction records using PostgreSQL, DBeaver, and Microsoft Excel",
        "Filtered transaction records to include only successful transactions",
        "Cleaned and standardized transaction status and product category data using Excel",
        "Used VLOOKUP and XLOOKUP to transform raw status and category values into standardized classifications",
        "Calculated total customer spending using SQL SUM() and GROUP BY",
        "Identified and ranked the top 10 users based on total transaction spending",
        "Identified top-selling products based on total units sold",
        "Analyzed total and average shipping costs across cities",
        "Created PivotTables to analyze transaction quantity and total sales performance",
        "Compared total sales across cities and product categories",
        "Extracted transaction years and joined transaction with customer cluster data to compare annual sales performance",
        "Applied SQL aggregation, filtering, grouping, sorting, date extraction, and JOIN operations to derive business insights",
      ],

      progressImages: [
        excelAnalysisResult1,
        excelAnalysisResult2,
        sqlAnalysisQueryResult3,
        sqlAnalysisQueryResult4,
        sqlAnalysisQueryResult5,
        sqlAnalysisQueryResult1,
        sqlAnalysisQueryResult2,
      ],

      resultImage: "",

      results:
        "Completed two complementary data analysis projects using SQL and Microsoft Excel. The SQL analysis demonstrated the ability to query and aggregate transactional data to identify high-value customers, top-selling products, and shipping cost patterns, while the Excel analysis demonstrated practical skills in data cleaning, VLOOKUP, XLOOKUP, and PivotTables. Together, the projects demonstrate the ability to transform raw business data into structured insights using both SQL and spreadsheet-based analytical tools.",

      githubLink: null,

      demoLink: null,
    },
  },
  {
    id: 4,
    title: "Cisco Network Configuration & Troubleshooting",
    shortDescription:
      "Enterprise network simulation using Cisco Packet Tracer with VLAN, DHCP, NAT, ACL, and network troubleshooting across multiple network segments.",
    category: "Networking",
    techStack: [
      "Cisco Packet Tracer",
      "Linux",
      "TCP/IP",
      "VLAN",
      "DHCP",
      "NAT",
      "ACL",
    ],
    thumbnail: networkThumbnail,
    color: "#0f766e",

    detail: {
      problem:
        "Understanding enterprise networking requires practical experience in configuring network devices, managing IP addresses, controlling traffic, and troubleshooting connectivity issues.",

      objective:
        "Design and configure a simulated enterprise network using Cisco Packet Tracer while implementing network segmentation, IP address management, traffic control, and connectivity between multiple network segments.",

      process:
        "Designed network topology → Configured VLAN and IP addressing → Implemented DHCP Server and Relay → Configured Static and Dynamic NAT → Applied Standard and Extended ACL → Tested network connectivity → Troubleshot configuration issues.",

      tools: [
        "Cisco Packet Tracer",
        "Linux",
        "TCP/IP",
        "VLAN",
        "DHCP",
        "NAT",
        "ACL",
      ],

      keyContributions: [
        "Designed and configured enterprise network topologies using Cisco Packet Tracer.",
        "Implemented VLAN, DHCP, NAT, and Access Control Lists (ACL) for network segmentation, IP address management, and traffic control.",
        "Configured DHCP Server and DHCP Relay to provide dynamic IP addressing across multiple network segments.",
        "Implemented Static and Dynamic NAT for internal-to-external network connectivity.",
        "Performed connectivity testing and basic network troubleshooting using ping, PDU, and Cisco IOS commands.",
      ],

      results:
        "Gained practical understanding of network configuration, segmentation, traffic control, and connectivity testing using Cisco Packet Tracer.",

      progressImages: [
        networkDhcp,
        networkAcl,
        networkRoute,
        networkVlan,
        networkDhcpReq,
        networkDhcpPool,
        networkDetailPc,
      ],
      resultImage: "",
      githubLink: "",
      demoLink: "",
    },
  },
  {
    id: 5,
    title: "Redesign of PRESISI Polri Mobile App",
    shortDescription:
      "Redesigned the SIAPkerja job application platform interface to reduce friction, improve task efficiency, and enhance overall user experience.",
    category: "UI/UX",
    techStack: ["Figma", "Canva", "User Research", "Prototyping"],
    thumbnail: presisiThumbnail,
    color: "#8b5cf6",
    detail: {
      problem:
        "The use of the Presisi Polri/Polri Super App for Police Clearance Certificate (SKCK) services causes confusion, frustration, and an additional administrative burden for users.",
      objective:
        "A clear, fast, and efficient process for applying for and renewing the Police Clearance Certificate (SKCK).",
      process:
        "Heuristic evaluation of existing interface → User interview & survey → Affinity mapping of pain points → Information architecture redesign → Low-fi wireframes → High-fi prototype in Figma → Usability testing & iteration.",
      tools: ["Figma", "Canva", "User Research", "Prototyping"],
      keyContributions: [
        "Conducted user interviews and qualitative analysis to identify key friction points in the SKCK issuance process",
        "Created Empathy Maps and User Personas to define user needs and service pain points",
        "Formulated How Might We (HMW) statements to guide targeted, user-centric solutions",
        "Designed and iterated three primary UI/UX solutions through high-fidelity prototyping",
        "Validated the redesigned flow to improve navigation clarity, document processing, and end-to-end service experience",
      ],
      results:
        "High-fidelity Figma prototype with a clearer SKCK issuance flow, streamlined document processing, and improved digital service experience.",
      progressImages: [presisiFigma, presisiDesign],
      resultImage: presisiResult,
      githubLink: null,
      demoLink: "https://bit.ly/prototypeRedesignPresisiApp",
    },
  },
  {
    id: 6,
    title: "Student Academic Performance Pipeline & Interactive Dashboard",
    shortDescription:
      "Built an end-to-end data pipeline that transforms raw academic records into an interactive dashboard for analyzing student performance.",
    category: "Data Analytics",
    techStack: ["Pentaho", "ETL", "DBeaver", "Star Schema", "Power BI", "DAX"],
    thumbnail: datalakehouseThumbnail,
    color: "#0ea5e9",
    detail: {
      problem:
        "Raw academic records are difficult to analyze consistently without a structured data model, automated transformation process, and interactive reporting layer.",
      objective:
        "Build a reliable academic performance pipeline and interactive dashboard to help users monitor passing rates, pass-versus-fail distributions, and course-level performance.",
      process:
        "Raw academic records → Star Schema design in DBeaver → ETL workflow development in Pentaho → Data loading into dimension and fact tables → Power BI dashboard development with DAX measures → Interactive filtering and validation.",
      tools: ["Pentaho", "DBeaver", "ETL", "Star Schema", "Power BI", "DAX"],
      keyContributions: [
        "Designed dimensional and fact tables in a Star Schema to map students, courses, semesters, and study programs",
        "Built automated Pentaho ETL workflows using merge joins, field selections, and structured data loading",
        "Loaded transformed academic records into target dimension and fact tables for consistent reporting",
        "Developed Power BI visualizations and DAX (Data Analysis Expressions) measures for passing rates and pass-versus-fail distributions",
        "Processed and visualized 70K+ student grade records, including 42K passing and 28K failing records",
        "Implemented dynamic filtering by Student ID (NIM) and course for granular academic analysis",
      ],
      progressImages: [
        datalakehouseErd,
        datalakehouseDataModel,
        datalakehouseEtl,
        datalakehouseEtlSqlQuery,
        datalakehouseEtlPipeline,
      ],
      resultImage: datalakehouseThumbnail,
      results:
        "End-to-end academic performance pipeline and interactive Power BI dashboard capable of dynamically analyzing 70K+ student grade records.",
      githubLink: null,
      demoLink: null,
    },
  },
  {
    id: 7,
    title: "PinjamBuku - Library Web App",
    shortDescription:
      "Frontend Laravel web application for library book borrowing management with CRUD operations, authentication, and MySQL backend.",
    category: "Laravel",
    techStack: ["Laravel", "PHP", "MySQL", "Blade", "HTML/CSS"],
    thumbnail: pinjamBukuThumbnail,
    color: "#f59e0b",
    detail: {
      problem:
        "Manual library borrowing systems are inefficient and error-prone, lacking real-time tracking of book availability and borrower history.",
      objective:
        "Develop a web-based library management system that digitizes the borrowing process with authentication, inventory management, and borrower tracking.",
      process:
        "Requirements analysis → Database schema design in MySQL → Laravel backend with Eloquent ORM → Blade templating for frontend → Role-based authentication → Feature testing.",
      tools: ["Laravel 12", "PHP 8", "MySQL", "Blade Templates", "HTML/CSS"],
      keyContributions: [
        "Designed normalized MySQL database schema for books, members, and transactions",
        "Implemented role-based access control (admin / member)",
        "Built full CRUD for book catalog, member management, and borrowing records",
        "Created real-time availability tracking and return deadline reminders",
        "Deployed with Laravel Artisan and configured MySQL connection",
      ],
      progressImages: [
        pinjamBukuRegister,
        pinjamBukuLogin,
        pinjamBukuBooklist,
        pinjamBukuCart,
      ],
      resultImage: pinjamBukuThumbnail,
      results:
        "Fully functional library management web app with authentication, real-time book availability, borrowing history, and an admin dashboard.",
      githubLink: "https://github.com/airawa23/pinjamBuku_laravelProject",
      demoLink: null,
    },
  },
  {
    id: 8,
    title: "DapuRame Recipe & Nutrition Mobile App",
    shortDescription:
      "A mobile app for discovering recipes and tracking nutritional information.",
    category: "Flutter",
    techStack: ["Figma", "Flutter", "Dart", "Firebase"],
    thumbnail: dapuRameThumbnail,
    color: "#8b5cf6",
    detail: {
      problem:
        "Users need a simple and engaging way to discover recipes, manage their cooking activities, and stay updated with relevant information in one platform.",
      objective:
        "Design an intuitive recipe and nutrition platform that simplifies recipe discovery and provides users with relevant updates through a clear and user-centered interface.",
      process:
        "User needs identification → Information architecture → User flow design → Homepage design → Notification feature design → High-fidelity prototyping → UI refinement.",
      tools: ["Figma", "Flutter", "Firebase", "UI/UX Design", "Prototyping"],
      keyContributions: [
        "Designed the Homepage to provide an intuitive entry point for discovering recipes and accessing key features",
        "Designed the Notification feature to deliver relevant updates and activities in a clear and organized interface",
        "Developed user flows to ensure smooth navigation between key features",
        "Created high-fidelity UI designs with a focus on visual hierarchy, usability, and consistency",
        "Applied user-centered design principles to improve the overall user experience",
      ],
      progressImages: [dapuRameFigma, dapuRameThumbnail],
      resultImage: dapuRameResult,
      results:
        "A user-centered mobile app interface featuring an intuitive Homepage and Notification system that helps users discover recipes, access important updates, and navigate the platform more easily.",
      githubLink: "https://github.com/bachtiarrizkyal/dapurame",
      demoLink: null,
    },
  },
  {
    id: 9,
    title: "Business Process Modeling – Customer Order Fulfillment",
    shortDescription:
      "Modeled an end-to-end customer order fulfillment process using BPMN to visualize inventory verification, production, customization, payment, and delivery workflows.",
    category: "Business Process",
    techStack: ["BPMN.io", "Business Process Modeling"],
    thumbnail: orderFulfillmentThumbnail,
    color: "#8b5cf6",
    detail: {
      problem:
        "The customer order fulfillment process involves multiple decision points and parallel activities, making it difficult to understand the complete workflow and the different paths based on product and raw material availability.",
      objective:
        "Model the end-to-end customer order fulfillment process using BPMN to clearly visualize decision points, production workflows, and parallel activities from order verification to completion.",
      process:
        "Customer order received → Product availability verification → Raw material availability check → Raw material procurement (if limited) → Product production → Customization → Order confirmation → Parallel shipping and payment processes → Order completion.",
      tools: ["BPMN.io", "Business Process Modeling"],
      keyContributions: [
        "Modeled the end-to-end customer order fulfillment process from incoming orders to order completion",
        "Identified and modeled product availability and raw material availability decision points using Exclusive (XOR) Gateways",
        "Designed alternative process flows for available and unavailable inventory conditions",
        "Modeled procurement and production activities when raw materials are insufficient",
        "Represented parallel shipping and payment activities using Parallel (AND) Gateways",
        "Structured the BPMN workflow to improve process visibility and understanding of business operations",
      ],
      resultImage: orderFulfillmentThumbnail,
      results:
        "A structured BPMN model representing the complete customer order fulfillment workflow, including inventory verification, procurement, production, customization, order confirmation, shipping, invoicing, and payment.",
      githubLink: null,
      demoLink: null,
    },
  },
  {
    id: 10,

    title: "Netflixers – Netflix Sharing Account Management System",

    shortDescription:
      "Developed a web-based system for managing Netflix sharing services, including account management, transactions, profile allocation, and subscription period monitoring.",

    category: "Laravel",

    techStack: [
      "Web Development",
      "Database Management",
      "Visual Paradigm",
      "Laravel",
      "PHP",
      "MySQL",
      "Sequence Diagram",
      "Robustness Diagram",
      "HTML/CSS",
      "Laragon",
      "Blade Templates",
      "Domain Modeling",
    ],

    thumbnail: netflixersThumbnail,

    color: "#ef4444",

    detail: {
      problem:
        "Managing Netflix sharing services involves multiple activities, including account management, profile allocation, transactions, subscription periods, and access monitoring. Without a centralized system, these activities can become difficult to track and manage efficiently.",

      objective:
        "Develop a centralized web-based system to organize Netflix sharing service operations, simplify account and transaction management, and provide better monitoring of account access and subscription periods.",

      process:
        "Account registration → Netflix account management → Profile allocation → Customer transaction → Subscription period monitoring → Account access monitoring → Service completion.",

      tools: [
        "Web Development",
        "Database Management",
        "Visual Paradigm",
        "Laravel",
        "PHP",
        "MySQL",
        "Sequence Diagram",
        "Robustness Diagram",
        "HTML/CSS",
        "Laragon",
        "Blade Templates",
        "Domain Modeling",
      ],

      keyContributions: [
        "Designed and implemented the notification feature to deliver relevant updates to users",
        "Developed the edit account feature to allow users to update their account information",
        "Implemented the logout feature to provide a secure and convenient sign-out process",
        "Designed clear user flows for notification, account editing, and logout interactions",
        "Integrated the features into the system to support a consistent user experience",
        "Improved usability by making account management and system access easier for users",
      ],

      progressImages: [
        netflixersDomainModel,
        netflixersRobustDiagramNotif,
        netflixersRobustDiagramLogOut,
        netflixersRobustDiagramEditAkun,
        netflixersSeqDiagram,
        netflixersError,
        netflixersInspect,
        netflixersNotification,
      ],

      resultImage: netflixersThumbnail,

      results:
        "A centralized Netflix sharing management system that organizes account, profile, transaction, and subscription data while improving monitoring, transparency, and operational efficiency.",

      githubLink: "https://github.com/jasmrntha/pppl-c-12-netflixers",

      demoLink: null,
    },
  },
];

// ============================================================
// Skills Data
// ============================================================

export const skillGroups = [
  {
    id: "data",
    label: "Data Analytics, Data Engineering & DB",
    icon: "BarChart3",
    color: "blue",
    skills: [
      "Python",
      "Pandas",
      "Power BI",
      "BPMN.io",
      "Erd",
      "Looker Studio",
      "Microsoft Excel",
      "SQL",
      "PostgreSQL",
      "DBeaver",
      "Pentaho",
      "ETL",
    ],
  },
  {
    id: "design",
    label: "UI/UX & Design",
    icon: "Palette",
    color: "purple",
    skills: ["Figma", "Canva", "Adobe Illustrator", "Adobe Photoshop"],
  },
  {
    id: "dev",
    label: "Development",
    icon: "Code2",
    color: "indigo",
    skills: [
      "React",
      "HTML",
      "CSS",
      "Tailwind CSS",
      "Laravel",
      "PHP",
      "Flutter",
      "Firebase",
    ],
  },
  {
    id: "networking",
    label: "Networking",
    icon: "Network",
    color: "emerald",
    skills: [
      "Cisco Packet Tracer",
      "Linux",
      "TCP/IP",
      "VLAN",
      "DHCP",
      "NAT",
      "ACL",
      "Routing & Switching",
    ],
  },
];

// ============================================================
// Experience / Activities Data
// ============================================================

export const experiences = [
  {
    id: 1,
    role: "Expert Staff — Fundraising",
    organization: "Information Systems Expo (ISE!)",
    organizationFull: "Information Systems Expo (ISE!) 2024",
    period: "Jun 2024 – Jan 2025",
    type: "Organization",
    images: [
      iseExperienceImage,
      iseExperienceImage1,
      iseExperienceImage2,
      iseExperienceImage3,
    ],
    description:
      "Conducted market research, sourced and negotiated with vendors, and managed procurement, payment workflows, and production monitoring for 230+ committee kits. Coordinated product and financial communications across committees, contributing to the highest profit among ISE! 2024 fundraising divisions.",
    tags: ["Fundraising", "Vendor Management", "Procurement", "Budgeting"],
    color: "#3b82f6",
  },
  {
    id: 2,
    role: "Chairperson II",
    organization: "HMSI ITS",
    organizationFull: "Himpunan Mahasiswa Sistem Informasi ITS",
    period: "Sep 2024",
    type: "Organization",
    description:
      "Ensured the smooth execution and flow of the HMSI 2024 Mid-Year Accountability Report Session. Facilitated productive discussions and maintained a collaborative environment throughout the proceedings.",
    tags: ["Leadership", "Facilitation", "Event Management"],
    color: "#3b82f6",
  },
  {
    id: 3,
    role: "Cyber Security Monitoring Team",
    organization: "Gemastik",
    organizationFull: "Gemastik Cyber Security Division",
    period: "Jun 2024 – Sep 2024",
    type: "Organization",
    images: [gemastikExperienceImage, presisiExperienceImage1],
    description:
      "Coordinated data submission and communication for 5+ Gemastik teams, contributing to three teams qualifying for the preliminary round and one team receiving a Consolation Prize. Also guided workshops in the Cyber Security division.",
    tags: ["Cyber Security", "Coordination", "Workshop Management"],
    color: "#3b82f6",
  },
  {
    id: 4,
    role: "Content Contributor",
    organization: "Avalon AI Community",
    organizationFull: "Avalon AI Community",
    period: "2024",
    type: "Community",
    images: [avalonExperienceImage],
    description:
      "Collected and summarized the latest artificial intelligence developments from global and local sources, then collaborated with the media team to distribute content on social media platforms.",
    tags: ["Artificial Intelligence", "Content Research", "Social Media"],
    color: "#14b8a6",
  },
  {
    id: 5,
    role: "Volunteer Staff — PIC UKM E-Sport",
    organization: "Heroes Day Esports",
    organizationFull: "ITS Sport Competition (ISC) 2023",
    period: "Sep 2023 – Nov 2023",
    type: "Community",
    description:
      "Served as the Person in Charge for the UKM E-Sports Valorant match at ITS Sport Competition 2023, held as part of the 63rd anniversary celebration of Institut Teknologi Sepuluh Nopember.",
    tags: ["Event Operations", "Coordination", "E-Sports"],
    color: "#14b8a6",
  },
  {
    id: 6,
    role: "Secretary II",
    organization: "Ini Lho ITS! Yogyakarta",
    organizationFull: "Forda Yogyakarta — Ini Lho ITS! 2023",
    period: "Nov 2022 – Feb 2023",
    type: "Organization",
    images: [ilitsExperienceImage],
    description:
      "Compiled activity proposals and school visit permit letters, and managed visit documentation from several schools during the Ini Lho ITS! 2023 program.",
    tags: ["Administration", "Documentation", "Event Support"],
    color: "#3b82f6",
  },
];

// ============================================================
// Filter categories (must match project `category` values)
// ============================================================

export const filterCategories = [
  "All",
  "Data Analytics",
  "UI/UX",
  "Flutter",
  "Laravel",
  "Front-End",
  "Networking",
  "Business Process",
];
