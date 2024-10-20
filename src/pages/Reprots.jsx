import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import { Link } from "react-router-dom";
import "../styles/Reports.css";
import TableEYEIcon from "../assets/tableeye.svg";
import DownlaodIcon from "../assets/download.svg";
import RefreshSVG from "../assets/refresh.svg";
import EraseImg from "../assets/erase.svg";

import {
  ArrowDownIcon,
  ChevronDoubleLeftIcon,
  ChevronDoubleRightIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  PlusIcon,
} from "@heroicons/react/24/solid";
const Reprots = ({onLogout}) => {
  const excelData = [
    [
      "ID",
      "Campaign",
      "Impressions",
      "Clicks",
      "Conversion",
      "CR",
      "Cost",
      "CPC",
      "CPM",
      "CTR",
      "CPA",
      "Date",
    ],
    [
      "654345",
      "Ads Roofing 1",
      "27,665",
      691,
      0,
      "---",
      115.26,
      0.17,
      4.16,
      2.5,
      "---",
      "15-02-24",
    ],
    [
      "654347",
      "Ads Solar New",
      "36,703",
      245,
      0,
      "---",
      75.95,
      0.31,
      2.06,
      0.67,
      "---",
      "16-02-24",
    ],
    [
      "123456",
      "Ads Roofing 1",
      "44,009",
      980,
      0,
      "---",
      254.8,
      0.26,
      5.78,
      2.23,
      "---",
      "16-02-24",
    ],
    [
      "789012",
      "S1 Solar New",
      "136,998",
      "6,601",
      0,
      "---",
      138.62,
      0.021,
      1.01,
      4.82,
      "---",
      "16-02-24",
    ],
    [
      "345678",
      "Ads Roofing 1",
      "296,778",
      "9,810",
      0,
      "---",
      215.82,
      0.022,
      0.72,
      3.31,
      "---",
      "10-02-24",
    ],
    [
      "901234",
      "Ads Solar New",
      "16,940",
      980,
      0,
      "---",
      117.6,
      0.12,
      6.94,
      5.79,
      "---",
      "11-02-24",
    ],
    [
      "567890",
      "Ads Roofing 1",
      "11,871",
      617,
      0,
      "---",
      98.72,
      0.16,
      8.31,
      5.2,
    ],
    [
      "234567",
      "Ads Roofing 1",
      "310,991",
      "13,879",
      0,
      "---",
      263.7,
      0.046,
      0.84,
      4.46,
      "---",
      "19-02-24",
    ],
    [
      "890123",
      "S1 Solar New",
      "297,991",
      "11,841",
      0,
      "---",
      236.82,
      0.02,
      0.79,
      3.97,
      "---",
      "18-02-24",
    ],
    [
      "456789",
      "Ads Roofing 1",
      "12,201",
      764,
      0,
      "---",
      106.96,
      0.14,
      8.76,
      6.26,
      "---",
      "17-02-24",
    ],
    [
      "012345",
      "Ads Solar New",
      "9,609",
      569,
      0,
      "---",
      56.33,
      0.012,
      5.86,
      5.92,
      "---",
      "21-02-24",
    ],
    [
      "678901",
      "S1 Solar New",
      "218,009",
      "9,765",
      0,
      "---",
      351.54,
      0.036,
      1.61,
      4.48,
      "---",
      "22-02-24",
    ],
    [
      "345678",
      "Ads Roofing 1",
      "387,086",
      "14,003",
      0,
      "---",
      238.05,
      0.017,
      0.61,
      3.62,
      "---",
      "23-02-24",
    ],
    [
      "901234",
      "Ads Roofing 1",
      "21,998",
      865,
      0,
      "---",
      129.75,
      0.15,
      5.89,
      3.93,
      "---",
      "24-02-24",
    ],
    [
      "567890",
      "Ads Solar New",
      "14,786",
      628,
      0,
      "---",
      57.14,
      0.091,
      3.86,
      4.25,
      "---",
      "25-02-24",
    ],
    [
      "234567",
      "S1 Solar New",
      "250,890",
      "10,880",
      0,
      "---",
      446.08,
      0.041,
      1.77,
      4.34,
      "---",
      "26-02-24",
    ],
    [
      "890123",
      "Ads Roofing 1",
      "167,087",
      8076,
      0,
      "---",
      185.74,
      0.023,
      1.11,
      4.83,
      "---",
      "27-02-24",
    ],
    [
      "456789",
      "Ads Roofing 1",
      "16,781",
      909,
      0,
      "---",
      107.33,
      0.082,
      6.39,
      5.42,
      "---",
      "28-02-24",
    ],
    [
      "012345",
      "Ads Solar New",
      "9,908",
      581,
      0,
      "---",
      69.72,
      0.12,
      7.03,
      5.86,
      "---",
      "29-02-24",
    ],
    [
      "678901",
      "S1 Solar New",
      "334,002",
      "14,993",
      0,
      "---",
      464.78,
      0.031,
      1.39,
      4.49,
      "---",
      "20-02-24",
    ],
    [
      "345678",
      "Ads Roofing 1",
      "404,009",
      "16,044",
      0,
      "---",
      304.83,
      0.019,
      0.75,
      3.97,
      "---",
      "21-02-24",
    ],
    [
      "901234",
      "Ads Solar New",
      "298,776",
      "10,998",
      0,
      "---",
      472.91,
      0.043,
      1.58,
      3.68,
      "---",
      "02-03-24",
    ],
    [
      "567890",
      "S1 Roofing 1",
      "198,776",
      "12,787",
      0,
      "---",
      268.52,
      0.021,
      1.35,
      6.43,
      "---",
      "01-03-24",
    ],
    [
      "234567",
      "Ads Roofing 1",
      "70,998",
      "27,00",
      0,
      "---",
      102.6,
      0.038,
      1.44,
      3.8,
      "---",
      "03-03-24",
    ],
    [
      "890123",
      "Ads Solar New",
      "16,810",
      809,
      0,
      "---",
      23.61,
      0.029,
      1.4,
      4.81,
      "---",
      "04-03-24",
    ],
    [
      "456789",
      "S1 Solar New",
      "234,980",
      "12,090",
      0,
      "---",
      350.61,
      0.029,
      1.49,
      5.15,
      "---",
      "05-03-24",
    ],
    [
      "012345",
      "Ads Roofing 1",
      "390,009",
      "18,765",
      0,
      "---",
      450.36,
      0.024,
      1.15,
      4.81,
      "---",
      "06-03-24",
    ],
    [
      "678901",
      "Ads Solar New",
      "210,980",
      "13,087",
      0,
      "---",
      392.61,
      0.031,
      1.86,
      6.2,
      "---",
      "07-03-24",
    ],
    [
      "345678",
      "S1 Roofing 1",
      "224,887",
      9877,
      0,
      "---",
      279.63,
      0.028,
      1.24,
      4.39,
      "---",
      "08-03-24",
    ],
    [
      "901234",
      "Ads Solar New",
      "19,887",
      998,
      0,
      "---",
      98.8,
      0.099,
      4.96,
      4.01,
      "---",
      "09-03-24",
    ],
    [
      "567890",
      "Ads Roofing 1",
      "23,987",
      1100,
      0,
      "---",
      165,
      0.15,
      6.87,
      4.59,
      "---",
      "09-03-24",
    ],
    [
      "234567",
      "S1 Solar New",
      "440,998",
      "21,887",
      0,
      "---",
      547.17,
      0.025,
      1.24,
      4.96,
      "---",
      "08-03-24",
    ],
    [
      "890123",
      "Ads Roofing 1",
      "356,990",
      "18,981",
      0,
      "---",
      360.63,
      0.019,
      1.01,
      5.32,
      "---",
      "07-03-24",
    ],
    [
      "456789",
      "Ads Solar New",
      "267,001",
      "12,998",
      0,
      "---",
      194.97,
      0.015,
      0.73,
      4.87,
      "---",
      "06-03-24",
    ],
    [
      "012345",
      "S1 Roofing 1",
      "234,807",
      "10,000",
      0,
      "---",
      217.45,
      0.019,
      0.92,
      4.26,
      "---",
      "05-03-24",
    ],
    [
      "678901",
      "Ads Solar New",
      "34,990",
      1340,
      0,
      "---",
      38.86,
      0.029,
      1.11,
      3.83,
      "---",
      "04-03-24",
    ],
    [
      "345678",
      "Ads Roofing 1",
      "16,889",
      1101,
      0,
      "---",
      39.63,
      0.036,
      2.34,
      6.52,
      "---",
      "03-03-24",
    ],
    [
      "901234",
      "S1 Solar New",
      "550,891",
      "24,881",
      0,
      "---",
      572.26,
      0.023,
      1.038,
      4.52,
      "---",
      "02-03-24",
    ],
    [
      "567890",
      "Ads Roofing 1",
      "276,900",
      "16,005",
      0,
      "---",
      304.09,
      0.019,
      1.09,
      5.78,
      "---",
      "01-03-24",
    ],
    [
      "234567",
      "Ads Solar New",
      "300,230",
      "17,921",
      0,
      "---",
      519.7,
      0.029,
      1.73,
      5.97,
      "---",
      "29-02-24",
    ],
    [
      "890123",
      "S1 Roofing 1",
      "198,666",
      8091,
      0,
      "---",
      323.64,
      0.025,
      1.62,
      4.07,
      "---",
      "28-02-24",
    ],
    [
      "456789",
      "Ads Solar New",
      "68,005",
      "4,112",
      0,
      "---",
      127.47,
      0.031,
      1.87,
      6.05,
      "---",
      "27-02-24",
    ],
    [
      "012345",
      "Ads Roofing 1",
      "27,504",
      988,
      0,
      "---",
      44.46,
      0.045,
      0.045,
      3.59,
      "---",
      "26-02-24",
    ],
    [
      "678901",
      "Ads Roofing 1",
      "398,089",
      "19,717",
      0,
      "---",
      709.81,
      0.036,
      1.78,
      4.95,
      "---",
      "25-02-24",
    ],
    [
      "345678",
      "S1 Solar New",
      "345,111",
      "15,818",
      0,
      "---",
      458.72,
      0.029,
      1.32,
      4.58,
      "---",
      "24-02-24",
    ],
    [
      "901234",
      "Ads Solar New",
      "301,883",
      "13,003",
      0,
      "---",
      351.08,
      0.027,
      1.16,
      4.31,
      "---",
      "23-02-24",
    ],
    [
      "567890",
      "S1 Roofing 1",
      "233,990",
      "9,891",
      0,
      "---",
      227.49,
      0.023,
      0.97,
      4.23,
      "---",
      "20-02-24",
    ],
    [
      "234567",
      "Ads Solar New",
      "195,871",
      "4,390",
      0,
      "---",
      127.31,
      0.029,
      0.64,
      2.24,
      "---",
      "19-02-24",
    ],
    [
      "890123",
      "Ads Roofing 1",
      "64,034",
      "1,540",
      0,
      "---",
      50.82,
      0.033,
      0.79,
      2.4,
      "---",
      "18-02-24",
    ],
    [
      "456789",
      "S1 Solar New",
      "233,900",
      "11,890",
      0,
      "---",
      416.15,
      0.035,
      1.77,
      5.08,
      "---",
      "17-02-24",
    ],
    [
      "012345",
      "Ads Roofing 1",
      "199,221",
      "9,221",
      0,
      "---",
      414.94,
      0.045,
      2.08,
      4.63,
      "---",
      "16-02-24",
    ],
    [
      "678901",
      "Ads Solar New",
      "455,661",
      "19,613",
      0,
      "---",
      372.64,
      0.019,
      0.0008,
      4.3,
      "---",
      "15-02-24",
    ],
    [
      "345678",
      "S1 Roofing 1",
      "178,012",
      6779,
      0,
      "---",
      257.6,
      0.038,
      1.44,
      3.81,
      "---",
      "13-02-24",
    ],
    [
      "901234",
      "Ads Roofing 1",
      "145,912",
      "3,453",
      0,
      "---",
      100.13,
      0.029,
      0.68,
      2.37,
      "---",
      "14-02-24",
    ],
    [
      "567890",
      "Ads Solar New",
      "77,123",
      "1,803",
      0,
      "---",
      68.51,
      0.038,
      0.88,
      2.34,
      "---",
      "12-02-24",
    ],
    [
      "234567",
      "S1 Solar New",
      "351,065",
      "17,891",
      0,
      "---",
      697.74,
      0.039,
      1.98,
      5.1,
      "---",
      "11-02-24",
    ],
    [
      "890123",
      "Ads Roofing 1",
      "301,815",
      "14,711",
      0,
      "---",
      456.04,
      0.031,
      1.51,
      4.87,
      "---",
      "10-02-24",
    ],
    [
      "456789",
      "Ads Solar New",
      "324,876",
      "15,022",
      0,
      "---",
      435.63,
      0.029,
      1.34,
      4.62,
      "---",
      "10-02-24",
    ],
    [
      "890123",
      "S1 Roofing 1",
      "288,421",
      "12,098",
      0,
      "---",
      314.54,
      0.026,
      1.09,
      4.19,
      "---",
      "11-02-24",
    ],
    [
      "012345",
      "Ads Roofing 1",
      "101,881",
      "5,609",
      0,
      "---",
      100.96,
      0.018,
      0.99,
      5.51,
      "---",
      "12-02-24",
    ],
    [
      "678901",
      "Ads Solar New",
      "79,543",
      "2,451",
      0,
      "---",
      63.72,
      0.026,
      0.81,
      3.08,
      "---",
      "13-02-24",
    ],
    [
      "345678",
      "S1 Solar New",
      "468,913",
      "22,887",
      0,
      "---",
      503.51,
      0.022,
      1.07,
      4.88,
      "---",
      "14-02-24",
    ],
    [
      "901234",
      "Ads Solar New",
      "40,1112",
      "18,712",
      0,
      "---",
      580.07,
      0.031,
      1.44,
      4.67,
      "---",
      "15-02-24",
    ],
    [
      "567890",
      "Ads Roofing 1",
      "381,033",
      "14,032",
      0,
      "---",
      350.8,
      0.025,
      0.92,
      3.68,
      "---",
      "16-02-24",
    ],
    [
      "567890",
      "S1 Roofing 1",
      "301,884",
      "11,330",
      0,
      "---",
      215.27,
      0.019,
      0.71,
      3.75,
      "---",
      "17-02-24",
    ],
    [
      "567890",
      "Ads Roofing 1",
      "101,801",
      "4,800",
      0,
      "---",
      100.8,
      0.021,
      0.99,
      4.72,
      "---",
      "18-02-24",
    ],
    [
      "567890",
      "Ads Solar New",
      "68,800",
      "1,603",
      0,
      "---",
      28.85,
      0.018,
      0.41,
      2.33,
      "---",
      "19-02-24",
    ],
  ];
  const [countries, setCountries] = useState([
    "Afghanistan",
    "Albania",
    "Algeria",
    "Andorra",
    "Angola",
    "Antigua and Barbuda",
    "Argentina",
    "Armenia",
    "Australia",
    "Austria",
    "Azerbaijan",
    "Bahamas",
    "Bahrain",
    "Bangladesh",
    "Barbados",
    "Belarus",
    "Belgium",
    "Belize",
    "Benin",
    "Bhutan",
    "Bolivia",
    "Bosnia and Herzegovina",
    "Botswana",
    "Brazil",
    "Brunei",
    "Bulgaria",
    "Burkina Faso",
    "Burundi",
    "Côte d'Ivoire",
    "Cabo Verde",
    "Cambodia",
    "Cameroon",
    "Canada",
    "Central African Republic",
    "Chad",
    "Chile",
    "China",
    "Colombia",
    "Comoros",
    "Congo (Congo-Brazzaville)",
    "Costa Rica",
    "Croatia",
    "Cuba",
    "Cyprus",
    "Czechia (Czech Republic)",
    "Democratic Republic of the Congo",
    "Denmark",
    "Djibouti",
    "Dominica",
    "Dominican Republic",
    "Ecuador",
    "Egypt",
    "El Salvador",
    "Equatorial Guinea",
    "Eritrea",
    "Estonia",
    "Ethiopia",
    "Fiji",
    "Finland",
    "France",
    "Gabon",
    "Gambia",
    "Georgia",
    "Germany",
    "Ghana",
    "Greece",
    "Grenada",
    "Guatemala",
    "Guinea",
    "Guinea-Bissau",
    "Guyana",
    "Haiti",
    "Holy See",
    "Honduras",
    "Hungary",
    "Iceland",
    "India",
    "Indonesia",
    "Iran",
    "Iraq",
    "Ireland",
    "Israel",
    "Italy",
    "Jamaica",
    "Japan",
    "Jordan",
    "Kazakhstan",
    "Kenya",
    "Kiribati",
    "Kuwait",
    "Kyrgyzstan",
    "Laos",
    "Latvia",
    "Lebanon",
    "Lesotho",
    "Liberia",
    "Libya",
    "Liechtenstein",
    "Lithuania",
    "Luxembourg",
    "Madagascar",
    "Malawi",
    "Malaysia",
    "Maldives",
    "Mali",
    "Malta",
    "Marshall Islands",
    "Mauritania",
    "Mauritius",
    "Mexico",
    "Micronesia",
    "Moldova",
    "Monaco",
    "Mongolia",
    "Montenegro",
    "Morocco",
    "Mozambique",
    "Myanmar (formerly Burma)",
    "Namibia",
    "Nauru",
    "Nepal",
    "Netherlands",
    "New Zealand",
    "Nicaragua",
    "Niger",
    "Nigeria",
    "North Korea",
    "North Macedonia",
    "Norway",
    "Oman",
    "Pakistan",
    "Palau",
    "Palestine State",
    "Panama",
    "Papua New Guinea",
    "Paraguay",
    "Peru",
    "Philippines",
    "Poland",
    "Portugal",
    "Qatar",
    "Romania",
    "Russia",
    "Rwanda",
    "Saint Kitts and Nevis",
    "Saint Lucia",
    "Saint Vincent and the Grenadines",
    "Samoa",
    "San Marino",
    "Sao Tome and Principe",
    "Saudi Arabia",
    "Senegal",
    "Serbia",
    "Seychelles",
    "Sierra Leone",
    "Singapore",
    "Slovakia",
    "Slovenia",
    "Solomon Islands",
    "Somalia",
    "South Africa",
    "South Korea",
    "South Sudan",
    "Spain",
    "Sri Lanka",
    "Sudan",
    "Suriname",
    "Sweden",
    "Switzerland",
    "Syria",
    "Tajikistan",
    "Tanzania",
    "Thailand",
    "Timor-Leste",
    "Togo",
    "Tonga",
    "Trinidad and Tobago",
    "Tunisia",
    "Turkey",
    "Turkmenistan",
    "Tuvalu",
    "Uganda",
    "Ukraine",
    "United Arab Emirates",
    "United Kingdom",
    "United States of America",
    "Uruguay",
    "Uzbekistan",
    "Vanuatu",
    "Venezuela",
    "Vietnam",
    "Yemen",
    "Zambia",
    "Zimbabwe",
  ]);
  const [compainsnames, setcompainsnames] = useState([
    "Ads Solar New",
    "T Home 1",
    "To Kitchen 2",
    "Ads Roofing 1",
    "Medical low end",
    "T Mortgage T1",
    "UNB Solar DR",
    "UNB Roofing DR",
    "UNB Bathroom XR",
    "UNB KIT DR",
    "ADS SO 1",
    "ADS 2 Insurance PP",
    "ADS 3 New Solar",
    "Test Home RR",
    "Test Old AFD",
    "Test Native",
    "UNB",
    "SD",
    "Test sd",
    "Test native",
  ]);

  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [filteredDatadates, setFilteredDatadates] = useState([]);

  const [showSavedReports, setShowSavedReports] = useState(false);
  const [showCompaingsnames, setShowSCompaingsnames] = useState(false);
  const [showplatform, setShowPlatform] = useState(false);
  const [selectplatform, setSelectPlatform] = useState("");
  const [Adsformattoggle, setshowAdsFormatToggle] = useState(false);
  const [Subscriptionshow, setSubscriptionShow] = useState(false);
  const [selectadsformat, setselectadformat] = useState("");
  const [selectedReport, setSelectedReport] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("");
  const [showCountries, setShowCountries] = useState(false);
  const [selectedDate, setSelectedDate] = useState("2024-02-01 / 2024-03-12");
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [filteredData, setFilteredData] = useState(excelData);
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(25);
  const [selectcomapinname, setselectcomainname] = useState(null);
  const [selectsub, setSub] = useState("");
  const handleDateRangeSelect = (start, end) => {
    setStartDate(start);
    setEndDate(end);
  };
  const filterDataByDateRange = (data) => {
    if (!startDate || !endDate) {
      return data; // Return unfiltered data if no date range is selected
    }

    // Filter data based on the selected date range
    return data.filter((report) => {
      // Convert report date to a Date object for comparison
      const reportDate = new Date(report["Date"]); // Assuming "Date" is the key for date in your report data

      // Check if report date is within the selected range
      return reportDate >= startDate && reportDate <= endDate;
    });
  };
  const [campains, setcomapins] = useState([
    "Creatives",
    "Campaings",
    "Ad Format",
    "Day",
    "Hour",
    "Zone",
    "Feed",
    "Platform",
    "Subscription age",
  ]);
  const [Adformat, setAdFormat] = useState([
    "Push",
    "OnClick",
    "In Page Push",
    "Calender",
  ]);
  const [subscription, setsubscription] = useState([
    "0-3 days",
    "4-7 days",
    "8-15 days",
    "16-30 days",
    "30-60 days",
    "60+",
  ]);
  const [plateform, setPlatform] = useState([
    "Android",
    "Windows",
    "iOS",
    "macOS",
    "Linux",
    "Chrome OS",
    "Others",
  ]);
  // const [currentRows, setCurrentRows] = useState([]);
  // Function to convert the Excel data to an array of report objects
  function createReportArray(data) {
    const reportArray = [];
    const headers = data[0]; // Assuming the first row contains headers

    // Iterate through each row (excluding headers)
    for (let i = 1; i < data.length; i++) {
      const row = data[i];
      const reportObject = {};

      // Iterate through each cell in the row
      for (let j = 0; j < headers.length; j++) {
        // Use headers as keys and corresponding cell value as value
        reportObject[headers[j]] = row[j];
      }

      // Push the object into the array
      reportArray.push(reportObject);
    }

    return reportArray;
  }

  // Create array of report objects
  const reports = createReportArray(excelData);

  // Handle toggling of saved reports dropdown
  const handleToggleSavedReports = () => {
    setShowSavedReports(!showSavedReports);
  };
  const handleToggleAdsFormat = () => {
    setshowAdsFormatToggle(!Adsformattoggle);
  };
  // Handle selection of a report
  const handleSelectReport = (report) => {
    setSelectedReport(report);
    setShowSavedReports(false);
  };

  // Handle selection of a country
  const handleSelectCountry = (country) => {
    setSelectedCountry(country);
    setShowCountries(false);
  };

  // Handle toggling of countries dropdown
  const handleToggleCountries = () => {
    setShowCountries(!showCountries);
  };

  // Handle toggling of date picker
  const handleToggleDatePicker = () => {
    setShowDatePicker(!showDatePicker);
  };

  // Handle selection of a date
  const handleSelectDate = (date) => {
    setSelectedDate(date);
    setShowDatePicker(false);
  };
  const handleselectAdFormat = (item) => {
    setselectadformat(item);
    setshowAdsFormatToggle(false);
  };
  const handlesubscriptiontoggle = (item) => {
    setSub(item);
    setSubscriptionShow(!Subscriptionshow);
  };
  const hanleSelectOptionToggle = () => {
    setSubscriptionShow(!Subscriptionshow);
  };
  const handleTogglePlateform = () => {
    setShowPlatform(!showplatform);
  };
  const handleSelectPlatform = (item) => {
    setSelectPlatform(item);
    setShowPlatform(false);
  };
  const handletogglecompaincontainer = () => {
    setShowSCompaingsnames(!showCompaingsnames);
  };
  const handleselectcompaingname = (item) => {
    setselectcomainname(item);
    setShowSCompaingsnames(false);
  };
  // Calculate total pages for pagination
  const totalPages = Math.ceil(reports.length / rowsPerPage);
  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  let currentRows = reports.slice(indexOfFirstRow, indexOfLastRow);
  const filteredRows = filterDataByDateRange(currentRows);
  if (selectcomapinname) {
    currentRows = currentRows.filter((item) =>
      item["Campaign"].includes(selectcomapinname)
    );
  }
  // Handle page change
  const handlePageChange = (pageNumber) => {
    if (pageNumber < 1 || pageNumber > totalPages) return;
    setCurrentPage(pageNumber);
  };

  // Effect to set document title
  useEffect(() => {
    document.title = "Reports Campaings . RollerAds";
  }, []);

  return (
    <div className="reportsContainer">
      <Header routename="Reports" onLogout={onLogout}/>
      <div className="sommingConatiner">
        <p className="tagline">
          🔥Smoking hot! Check out a new profitable offer from CpaRoll —{" "}
          <span>
            <Link to="https://platform.cparoll.com/offers/890">
              AVG Mobile Security WW
            </Link>{" "}
          </span>
          {"  "}
          for Android and iOS. Performs strong on our traffic.
        </p>
        <p style={{ cursor: "pointer" }}>Dismiss</p>
      </div>
      <div className="reaportsfiltercontainer">
        <div className="reportfiheader">
          <h3>Filters</h3>
          <div className="reportfilterrightside">
            <p>Show saved reports</p>
            {/* toggledivbycss */}
          </div>
        </div>
        <div className="filerreportsbody">
          <div className="reportsdivItem">
            <div>
              <input
                type="text"
                value={selectedReport}
                placeholder="Group by Campaings"
                readOnly
                onClick={handleToggleSavedReports}
              />
            </div>
            {showSavedReports && (
              <div className="optionsContainer avafi">
                {campains.map((item, i) => (
                  <div
                    className="countriescontainer"
                    key={i}
                    onClick={() => handleSelectReport(item)}
                  >
                    {item}
                  </div>
                ))}
              </div>
            )}
          </div>
          <div className="reportsdivItem datedatedate">
            <div>
              <input
                className="dadddd"
                type="text"
                value={selectedDate}
                placeholder="Select date"
                readOnly
                onClick={handleToggleDatePicker}
              />
            </div>
            {showDatePicker && (
              <div className="mycustomadedateranger ltr show-ranges show-calendar opensright">
                <div class="ranges">
                  <ul>
                    <li data-range-key="Today">Today</li>
                    <li data-range-key="Yesterday">Yesterday</li>
                    <li data-range-key="Current Week">Current Week</li>
                    <li data-range-key="Last 7 Days">Last 7 Days</li>
                    <li data-range-key="Last 30 Days">Last 30 Days</li>
                    <li data-range-key="This Month">This Month</li>
                    <li data-range-key="Last Month">Last Month</li>
                  </ul>
                </div>
                <div>
                  <div className="flextopcontainer">
                    <div class="drp-calendar left">
                      <div class="calendar-table">
                        <table class="table-condensed">
                          <thead>
                            <tr>
                              <th class="prev available">
                                <span></span>
                              </th>
                              <th colspan="5" class="month">
                                Feb 2024
                              </th>
                              <th></th>
                            </tr>
                            <tr>
                              <th>Mo</th>
                              <th>Tu</th>
                              <th>We</th>
                              <th>Th</th>
                              <th>Fr</th>
                              <th>Sa</th>
                              <th>Su</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td class="off ends available" data-title="r0c0">
                                26
                              </td>
                              <td class="off ends available" data-title="r0c1">
                                27
                              </td>
                              <td class="off ends available" data-title="r0c2">
                                28
                              </td>
                              <td class="off ends available" data-title="r0c3">
                                29
                              </td>
                              <td class="available active" data-title="r0c4">
                                1
                              </td>
                              <td
                                class="weekend available active "
                                data-title="r0c5"
                              >
                                2
                              </td>
                              <td
                                class="weekend available active"
                                data-title="r0c6"
                              >
                                3
                              </td>
                            </tr>
                            <tr>
                              <td class="available active" data-title="r1c0">
                                4
                              </td>
                              <td class="available active" data-title="r1c1">
                                5
                              </td>
                              <td
                                class="today active start-date end-date available"
                                data-title="r1c2"
                              >
                                6
                              </td>
                              <td class="off active disabled" data-title="r1c3">
                                7
                              </td>
                              <td class="off active disabled" data-title="r1c4">
                                8
                              </td>
                              <td
                                class="weekend active off disabled"
                                data-title="r1c5"
                              >
                                9
                              </td>
                              <td
                                class="weekend active off disabled"
                                data-title="r1c6"
                              >
                                10
                              </td>
                            </tr>
                            <tr>
                              <td class="off active disabled" data-title="r2c0">
                                11
                              </td>
                              <td class="off active disabled" data-title="r2c1">
                                12
                              </td>
                              <td class="off active disabled" data-title="r2c2">
                                13
                              </td>
                              <td class="off active disabled" data-title="r2c3">
                                14
                              </td>
                              <td class="off disabled active" data-title="r2c4">
                                15
                              </td>
                              <td
                                class="weekend off disabled active"
                                data-title="r2c5"
                              >
                                16
                              </td>
                              <td
                                class="weekend off disabled active"
                                data-title="r2c6"
                              >
                                17
                              </td>
                            </tr>
                            <tr>
                              <td class="off disabled active" data-title="r3c0">
                                18
                              </td>
                              <td class="off disabled active" data-title="r3c1">
                                19
                              </td>
                              <td class="off disabled active" data-title="r3c2">
                                20
                              </td>
                              <td class="off disabled active" data-title="r3c3">
                                21
                              </td>
                              <td class="off disabled active" data-title="r3c4">
                                22
                              </td>
                              <td
                                class="weekend off disabled active"
                                data-title="r3c5"
                              >
                                23
                              </td>
                              <td
                                class="weekend off disabled active"
                                data-title="r3c6"
                              >
                                24
                              </td>
                            </tr>
                            <tr>
                              <td class="off disabled active" data-title="r4c0">
                                25
                              </td>
                              <td class="off disabled active" data-title="r4c1">
                                26
                              </td>
                              <td class="off disabled active" data-title="r4c2">
                                27
                              </td>
                              <td class="off disabled active" data-title="r4c3">
                                28
                              </td>
                              <td class="off disabled active" data-title="r4c4">
                                29
                              </td>
                            </tr>
                            <tr>
                              <td
                                class="off ends off disabled"
                                data-title="r5c0"
                              >
                                1
                              </td>
                              <td
                                class="off ends off disabled"
                                data-title="r5c1"
                              >
                                2
                              </td>
                              <td
                                class="off ends off disabled"
                                data-title="r5c2"
                              >
                                3
                              </td>
                              <td
                                class="off ends off disabled"
                                data-title="r5c3"
                              >
                                4
                              </td>
                              <td
                                class="off ends off disabled"
                                data-title="r5c4"
                              >
                                5
                              </td>
                              <td
                                class="weekend off ends off disabled"
                                data-title="r5c5"
                              >
                                6
                              </td>
                              <td
                                class="weekend off ends off disabled"
                                data-title="r5c6"
                              >
                                7
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                    <div class="drp-calendar right">
                      <div class="calendar-table">
                        <table class="table-condensed">
                          <thead>
                            <tr>
                              <th class="prev available">
                                <span></span>
                              </th>
                              <th colspan="5" class="month">
                                March 2024
                              </th>
                              <th></th>
                            </tr>
                            <tr>
                              <th>Mo</th>
                              <th>Tu</th>
                              <th>We</th>
                              <th>Th</th>
                              <th>Fr</th>
                              <th>Sa</th>
                              <th>Su</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td
                                class="off ends off disabled"
                                data-title="r0c0"
                              >
                                25
                              </td>
                              <td
                                class="off ends off disabled"
                                data-title="r0c1"
                              >
                                26
                              </td>
                              <td
                                class="off ends off disabled"
                                data-title="r0c2"
                              >
                                27
                              </td>
                              <td
                                class="off ends off disabled"
                                data-title="r0c3"
                              >
                                28
                              </td>
                              <td
                                class="off ends off disabled"
                                data-title="r0c4"
                              >
                                29
                              </td>
                              <td
                                class="weekend off ends off disabled"
                                data-title="r0c5"
                              >
                                30
                              </td>
                              <td
                                class="weekend off ends off disabled"
                                data-title="r0c6"
                              >
                                31
                              </td>
                            </tr>
                            <tr>
                              <td class="off active disabled" data-title="r1c0">
                                1
                              </td>
                              <td class="off active disabled" data-title="r1c1">
                                2
                              </td>
                              <td class="off active disabled" data-title="r1c2">
                                3
                              </td>
                              <td class="off active disabled" data-title="r1c3">
                                4
                              </td>
                              <td class="off active disabled" data-title="r1c4">
                                5
                              </td>
                              <td
                                class="weekend off active disabled"
                                data-title="r1c5"
                              >
                                6
                              </td>
                              <td
                                class="weekend off active disabled"
                                data-title="r1c6"
                              >
                                7
                              </td>
                            </tr>
                            <tr>
                              <td class="off active disabled" data-title="r2c0">
                                8
                              </td>
                              <td class="off active disabled" data-title="r2c1">
                                9
                              </td>
                              <td class="off active disabled" data-title="r2c2">
                                10
                              </td>
                              <td class="off active disabled" data-title="r2c3">
                                11
                              </td>
                              <td class="off active disabled" data-title="r2c4">
                                12
                              </td>
                              <td
                                class="weekend off disabled"
                                data-title="r2c5"
                              >
                                13
                              </td>
                              <td
                                class="weekend off disabled"
                                data-title="r2c6"
                              >
                                14
                              </td>
                            </tr>
                            <tr>
                              <td class="off disabled" data-title="r3c0">
                                15
                              </td>
                              <td class="off disabled" data-title="r3c1">
                                16
                              </td>
                              <td class="off disabled" data-title="r3c2">
                                17
                              </td>
                              <td class="off disabled" data-title="r3c3">
                                18
                              </td>
                              <td class="off disabled" data-title="r3c4">
                                19
                              </td>
                              <td
                                class="weekend off disabled"
                                data-title="r3c5"
                              >
                                20
                              </td>
                              <td
                                class="weekend off disabled"
                                data-title="r3c6"
                              >
                                21
                              </td>
                            </tr>
                            <tr>
                              <td class="off disabled" data-title="r4c0">
                                22
                              </td>
                              <td class="off disabled" data-title="r4c1">
                                23
                              </td>
                              <td class="off disabled" data-title="r4c2">
                                24
                              </td>
                              <td class="off disabled" data-title="r4c3">
                                25
                              </td>
                              <td class="off disabled" data-title="r4c4">
                                26
                              </td>
                              <td
                                class="weekend off disabled"
                                data-title="r4c5"
                              >
                                27
                              </td>
                              <td
                                class="weekend off disabled"
                                data-title="r4c6"
                              >
                                28
                              </td>
                            </tr>
                            <tr>
                              <td class="off disabled" data-title="r5c0">
                                29
                              </td>
                              <td class="off disabled" data-title="r5c1">
                                30
                              </td>
                              <td
                                class="off ends off disabled"
                                data-title="r5c2"
                              >
                                1
                              </td>
                              <td
                                class="off ends off disabled"
                                data-title="r5c3"
                              >
                                2
                              </td>
                              <td
                                class="off ends off disabled"
                                data-title="r5c4"
                              >
                                3
                              </td>
                              <td
                                class="weekend off ends off disabled"
                                data-title="r5c5"
                              >
                                4
                              </td>
                              <td
                                class="weekend off ends off disabled"
                                data-title="r5c6"
                              >
                                5
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>

                  <div class="drp-buttons">
                    <span class="drp-selected">2024-03-06 - 2024-03-06</span>
                    <button
                      class="cancelBtn btn btn-sm btn-default"
                      type="button"
                    >
                      Clear
                    </button>
                    <button
                      class="applyBtn btn btn-sm btn-primary"
                      type="button"
                    >
                      Apply
                    </button>{" "}
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className="reportsdivItem">
            <div>
              <input
                type="text"
                value={selectadsformat}
                placeholder="Ad Format"
                readOnly
                onClick={handleToggleAdsFormat}
              />
            </div>
            {Adsformattoggle && (
              <div className="optionsContainer">
                {Adformat.map((item, i) => (
                  <div key={i} onClick={() => handleselectAdFormat(item)}>
                    {item}
                  </div>
                ))}

                {/* Add more reports as needed */}
              </div>
            )}
          </div>{" "}
          <div className="reportsdivItem">
            <div className="comapaintogglecontainer">
              <label class="switch">
                <input type="checkbox" checked />
                <span class="slider round"></span>
              </label>
              <input
                type="text"
                value={selectcomapinname}
                placeholder="Campaings"
                readOnly
                onClick={handletogglecompaincontainer}
              />
            </div>
            {/* <svg xmlns="http://www.w3.org/2000/svg" width={10} height={10} style={{ position: 'relative', fill: '#4b474e', left: '-29px' }} onClick={() => setselectcomainname(null)}>
              <path d="M6.895455 5l2.842897-2.842898c.348864-.348863.348864-.914488 0-1.263636L9.106534.261648c-.348864-.348864-.914489-.348864-1.263636 0L5 3.104545 2.157102.261648c-.348863-.348864-.914488-.348864-1.263636 0L.261648.893466c-.348864.348864-.348864.914489 0 1.263636L3.104545 5 .261648 7.842898c-.348864.348863-.348864.914488 0 1.263636l.631818.631818c.348864.348864.914773.348864 1.263636 0L5 6.895455l2.842898 2.842897c.348863.348864.914772.348864 1.263636 0l.631818-.631818c.348864-.348864.348864-.914489 0-1.263636L6.895455 5z" />
            </svg> */}
            {showCompaingsnames && (
              <div className="optionsContainer">
                {compainsnames.map((item, i) => (
                  <div
                    className="countriescontainer"
                    key={i}
                    onClick={() => handleselectcompaingname(item)}
                  >
                    {item}
                  </div>
                ))}
              </div>
            )}
          </div>{" "}
          <div className="reportsdivItem">
            <div>
              <input type="text" value="" placeholder="Feeds" />
            </div>
          </div>{" "}
          <div className="reportsdivItem">
            <div>
              <input type="text" value="" placeholder="Zones" />
            </div>
          </div>
          <div className="reportsdivItem">
            <div className="workkkk">
              <div className="plusiconcintainer">
                <PlusIcon className="wwww" />
              </div>
              <input
                type="text"
                value={selectedCountry}
                placeholder="Countries"
                readOnly
                onClick={handleToggleCountries}
              />
            </div>
            {showCountries && (
              <div className="optionsContainer">
                {countries.map((item, i) => (
                  <div
                    className="countriescontainer"
                    key={i}
                    onClick={() => handleSelectCountry(item)}
                  >
                    {item}
                  </div>
                ))}
              </div>
            )}
          </div>{" "}
          <div className="reportsdivItem">
            <div>
              <input
                type="text"
                value={selectplatform}
                placeholder="Platform"
                readOnly
                onClick={handleTogglePlateform}
              />
            </div>
            {showplatform && (
              <div className="optionsContainer">
                {plateform.map((item, i) => (
                  <div
                    className="countriescontainer"
                    key={i}
                    onClick={() => handleSelectPlatform(item)}
                  >
                    {item}
                  </div>
                ))}
              </div>
            )}
          </div>{" "}
          <div className="reportsdivItem">
            <div>
              <input
                type="text"
                value={selectsub}
                placeholder="Subscriptoin age"
                readOnly
                onClick={hanleSelectOptionToggle}
              />
            </div>
            {Subscriptionshow && (
              <div className="optionsContainer">
                {subscription.map((item, i) => (
                  <div
                    className="countriescontainer"
                    key={i}
                    onClick={() => handlesubscriptiontoggle(item)}
                  >
                    {item}
                  </div>
                ))}
                {/* Add more reports as needed */}
              </div>
            )}
          </div>
        </div>
        <div className="footbuttons">
          <div>
            {" "}
            <img src={RefreshSVG} alt="" /> <span>Apply filters</span>
          </div>
          <div>
            {" "}
            <img src={EraseImg} alt="" /> <span>Clear filters</span>
          </div>
        </div>
      </div>
      <div className="reportstalbContainer">
        <div className="reporttableherader">
          <h3>Report</h3>
          <div className="iconscintainerseye">
            <img src={DownlaodIcon} alt="" />
            <img src={TableEYEIcon} alt="" />
          </div>
        </div>
        <div className="compainstableContainer parentcomapinstablecontainer">
          <table className="campaignsTable onemoretalbe">
            <thead>
              <tr>
                <th>
                  <div className="tablesingledivvv">
                    ID <ArrowDownIcon className="hhhh" />
                  </div>
                </th>
                <th>
                  <div className="tablesingledivvv">
                    Campaings <ArrowDownIcon className="hhhh" />
                  </div>
                </th>
                <th>
                  <div className="tablesingledivvv">
                    Impressions <ArrowDownIcon className="hhhh" />
                  </div>
                </th>
                <th>
                  <div className="tablesingledivvv">
                    Clicks <ArrowDownIcon className="hhhh" />
                  </div>
                </th>
                <th>
                  <div className="tablesingledivvv">
                    Conversion <ArrowDownIcon className="hhhh" />
                  </div>
                </th>
                <th>
                  <div className="tablesingledivvv">
                    CR <ArrowDownIcon className="hhhh" />
                  </div>
                </th>
                <th>
                  <div className="tablesingledivvv">
                    Cost <ArrowDownIcon className="hhhh" />
                  </div>
                </th>
                <th>
                  <div className="tablesingledivvv">
                    CPC <ArrowDownIcon className="hhhh" />
                  </div>
                </th>
                <th>
                  <div className="tablesingledivvv">
                    CPM <ArrowDownIcon className="hhhh" />
                  </div>
                </th>
                <th>
                  <div className="tablesingledivvv">
                    CTR <ArrowDownIcon className="hhhh" />
                  </div>
                </th>
                <th>
                  <div className="tablesingledivvv">
                    CPA <ArrowDownIcon className="hhhh" />
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              {currentRows.map((report, index) => (
                <tr key={index} className="on">
                  <td>{report["ID"]}</td>
                  <td>{report["Campaign"]}</td>
                  <td>{report["Impressions"]}</td>
                  <td>{report["Clicks"]}</td>
                  <td style={{ textAlign: "left" }}>{report["Conversion"]}</td>
                  <td>{report["CR"]}</td>
                  <td>${report["Cost"]}</td>
                  <td>{report["CPC"]}</td>
                  <td>{report["CPM"]}</td>
                  <td>{report["CTR"]}</td>
                  <td>{report["CPA"]}</td>
                </tr>
              ))}
              {/* <tr className="on">
                <td>Total</td>
                <td> </td>
                <td>
                  {currentRows.reduce((sum, item) => {
                    const CTRValue = item.Impressions.replace(/,/g, "");
                    return sum + +CTRValue;
                  }, 0)}
                </td>
                <td>
                  {currentRows.reduce((sum, item) => sum + item.Clicks, 0)}
                </td>
                <td style={{ textAlign: "left" }}>
                  {currentRows.reduce((sum, item) => sum + item.Conversion, 0)}
                </td>
                <td>{"-"}</td>
                <td>
                  $
                  {currentRows
                    .reduce((sum, item) => sum + item.Cost, 0)
                    .toFixed(2)}
                </td>
                <td>
                  {currentRows
                    .reduce((sum, item) => sum + item.CPC, 0)
                    .toFixed(3)}
                </td>
                <td>
                  {currentRows
                    .reduce((sum, item) => sum + item.CPM, 0)
                    .toFixed(3)}
                </td>
                <td>
                  {currentRows
                    .reduce((sum, item) => sum + item.CTR, 0)
                    .toFixed(3)}
                </td>
                <td>{"-"}</td>
              </tr> */}
            </tbody>
            <footer className="tablefooter"></footer>
          </table>
        </div>
        <div className="paginationContainer">
          {/* Display row count and rows per page selection */}
          <p>Rws count: {currentRows.length}</p>
          <label htmlFor="rowsPerPage">Rows per Page:</label>
          <select
            id="rowsPerPage"
            value={rowsPerPage}
            onChange={(e) => setRowsPerPage(parseInt(e.target.value))}
          >
            <option value={25}>25</option>
            <option value={50}>50</option>
            <option value={75}>75</option>
            <option value={100}>100</option>
          </select>
          {/* Pagination buttons */}
          <button onClick={() => handlePageChange(1)}>
            <ChevronDoubleLeftIcon className="clicon" />
          </button>
          <button onClick={() => handlePageChange(currentPage - 1)}>
            <ChevronLeftIcon className="clicon" />
          </button>
          <button onClick={() => handlePageChange(currentPage + 1)}>
            <ChevronRightIcon className="clicon" />
          </button>
          <button onClick={() => handlePageChange(totalPages)}>
            <ChevronDoubleRightIcon className="clicon" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Reprots;
