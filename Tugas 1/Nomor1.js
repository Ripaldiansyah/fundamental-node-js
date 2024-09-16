const LEVEL_BEGINNER = "Beginner";
const LEVEL_ADVANCED = "Advanced";
const LEVEL_EXPERT = "Exper";

const biodata = {
  name: "Ripaldiansyah",
  age: 24,
  hobbies: ["ngoding"],
  isMarried: false,
  schoolList: [
    {
      name: "SDN Mampang 03",
      yearIn: 2006,
      yearOut: 2012,
      major: null,
    },
    {
      name: "SMPI Cakra Nusantara",
      yearIn: 2012,
      yearOut: 2015,
      major: null,
    },
    {
      name: "SMK Cakra Nusantara",
      yearIn: 2015,
      yearOut: 2018,
      major: "Teknik Komputer dan Jaringan",
    },
    {
      name: "Universitas Pamulang",
      yearIn: 2019,
      yearOut: 2020,
      major: "Teknik Informatika",
    },
    {
      name: "Universitas Indraprasta PGRI",
      yearIn: 2020,
      yearOut: 2024,
      major: "Teknik Informatika",
    },
  ],
  skills: [
    {
      skillName: "Microsoft Excel",
      level: LEVEL_ADVANCED,
    },
    {
      skillName: "Mikrotik",
      level: LEVEL_ADVANCED,
    },
    {
      skillName: "Cisco",
      level: LEVEL_ADVANCED,
    },
    {
      skillName: "Java",
      level: LEVEL_ADVANCED,
    },
    {
      skillName: "Spring Boot",
      level: LEVEL_BEGINNER,
    },
    {
      skillName: "Dart",
      level: LEVEL_BEGINNER,
    },
    {
      skillName: "Flutter",
      level: LEVEL_BEGINNER,
    },
  ],
  interestCoding: true,
};

console.log(biodata);
