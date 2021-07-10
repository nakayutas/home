// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION  
const mainBody =  {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Yutaro",
  middleName: "",
  lastName: "Nakayama",
  message: " 「作りたいものを必ず作ってみせる」をモットーに成長していきます ",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/NakayamaYutaro",
    },
    {
      image: "fa-instagram",
      url: "https://www.instagram.com/yutaro.nk/",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/yutaro-nakayama-66698a130/",
    },
    {
      image: "fa-Qiita",
      url: "https://www.twitter.com/NakayamaYutaro/",
    },
  ],
};

// ABOUT SECTION
// If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
//a) your Instagram username
//      i.e:profilePictureLink:"johnDoe123",
//b) a link to an hosted image
//      i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
//c) image in "editable-stuff" directory and use require("") to import here,
//      i.e: profilePictureLink: require("../editable-stuff/nakayamayutaro.png"),
//d) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",
// For Resume either provide link to your resume or import from "editable-stuff" directory
//     i.e resume: require("../editable-stuff/resume.pdf"),
//         resume: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",

const about = {
  show: true,
  heading: "私について",
  imageLink: require("../assets/img/nakayamayutaro.jpg"),
  imageSize: 375,
  message:
    "初めまして、中山裕太郎と申します。昨年、徳島大学工学部知能情報工学科を卒業しまして、現在都内のEC企業で社内IT部門のエンジニアとして働いています。" + 
    "物を作って売って、世の中に貢献できるよう頑張っていきます。もしご興味持っていただけたら、気軽にご相談いただけると幸いです。",
  resume: "https://github.com/nakayutas/portfolio",
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: true,
  heading: "過去のプロジェクト",
  gitHubUsername: "NakayamaYutaro", //i.e."johnDoe12Gh"
  reposLength: 4,
  specificRepos: [],
};

// Leadership SECTION
const leadership = {
  show: false,
  heading: "Leadership",
  message:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus arcu bibendum at varius. Libero justo laoreet sit amet cursus sit amet. Imperdiet dui accumsan sit amet nulla facilisi morbi. At auctor urna nunc id. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Et magnis dis parturient montes nascetur ridiculus mus mauris. In nisl nisi scelerisque eu ultrices vitae auctor. Mattis nunc sed blandit libero volutpat sed cras ornare. Pulvinar neque laoreet suspendisse interdum consectetur libero.",
  images: [
    { 
      img: require("../assets/img/nakayamayutaro.jpg"), 
      label: "First slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
    { 
      img: require("../assets/img/nakayamayutaro.jpg"), 
      label: "Second slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
  ],
  imageSize: {
    width:"615",
    height:"450"
  }
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "スキル",
  hardSkills: [
    { name: "Python", value: 70 },
    { name: "MySQL", value: 60 },
    { name: "C/C++", value: 40 },
    { name: "JavaScript", value: 40 },
    { name: "HTML/CSS", value: 60 },
    { name: "PHP", value: 60 },
    { name: "ExcelVBA", value: 50 },
    { name: "C#", value: 30 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "連絡",
  message: "只今Web、システム開発の案件を募集しております。気軽にご連絡ください。",
  email: "nakayama.yutaro@icloud.com",
};

const experiences = {
  show: true,
  heading: "キャリア",
  data: [
    {
      role: 'In-house IT Engineer',// Here Add Company Name
      companylogo: require('../assets/img/fromjapan2.png'),
      date: 'Mar 2021 – Present',
    }
  ] 
}

const design = {
  show: true,
  heading: "ウェブ制作",
  imageLink: require("../assets/img/sample1.png"),
  imageLink2: require("../assets/img/sample2.png"),
  imageWidth: 360,
  imageHeight: 450,
}

// Blog SECTION
// const blog = {
//   show: false,
// };

export { navBar, mainBody, about, repos, skills, leadership, getInTouch, experiences, design };
