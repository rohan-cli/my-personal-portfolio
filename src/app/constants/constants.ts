export const NAME = 'Rohan Mishra';
export const BG_INDEX = 'img/bg.jpeg';

export const PERSON = [
  { title: 'Name', value: 'Rohan Mishra' },
  { title: 'Age', value: '28' },
  { title: 'Phone', value: '+919532356142' },
  { title: 'Mail', value: 'rohan.mishra488@gmail.com' },
  { title: 'Location', value: 'Bengaluru, Karnataka' }
];

export const SOCIAL_MEDIA = [
  { title: 'github', icon: 'fab fa-github', link: 'https://github.com/rohan-cli' },
  { title: 'linkedin', icon: 'fab fa-linkedin', link: 'https://www.linkedin.com/in/rohn-mishra/' }
];

export const ABOUT = 'I am a dedicated full-time front-end developer with over 6.5 years of professional experience in web technologies, specializing in Angular frameworks and responsive design. I excel at creating scalable single-page applications, implementing secure authentication systems, and building reusable UI components while following agile development practices. My expertise spans the complete front-end development stack, from modern JavaScript frameworks to integrated development tools like Visual Studio Code and Git, with a strong focus on delivering high-quality, user-centric web solutions.';

export const DOING = [
  {
    icon: 'fas fa-code',
    title: 'Web Development',
    sub: 'Building responsive and interactive websites'
  }
];

export const SKILLS = [
  { skill: 'HTML/CSS', percent: 90 },
  { skill: 'JavaScript', percent: 85 },
  { skill: 'TypeScript', percent: 80 },
  { skill: 'Angular', percent: 80 },
  { skill: 'NgRx', percent: 70 },
  { skill: 'RxJS', percent: 70 },
  { skill: 'Bootstrap', percent: 70 }
];

export const EDUCATION = [
  {
    title: 'Bachelor in Computer Science',
    sub: '2014 - 2018',
    desc: 'Noida Institue of Engineering & Technology'
  }
];

export const EXPERIENCE = [
  {
    title: 'Frontend Developer',
    sub: '2023 - Present',
    desc: 'Watlow'
  },
  {
    title: 'Software Engineer Lead',
    sub: '2022 - 2023',
    desc: 'Capgemini'
  },
  {
    title: 'Software Developer',
    sub: '2021 - 2022',
    desc: 'IBM'
  },
  {
    title: 'Project Engineer',
    sub: '2019 - 2021',
    desc: 'Wipro'
  }
];

export const PORTFOLIOS = [
  {
    title: 'Weather App 🌦️',
    keyword: 'Angular',
    repo: 'https://github.com/rohan-cli/weather-dashboard-app',
    link: 'https://weather-dashboard-app-dev1.netlify.app/',
    img: 'project/weather-app.png'
  },
  {
    title: 'Personal Portfolio',
    keyword: 'Angular',
    repo: 'https://github.com/rohan-cli/my-personal-portfolio',
    link: 'https://my-personal-portfolio-dev.netlify.app/',
    img: 'img/bg.jpeg'
  }
];

export const emailTemplate = (name: string, email: string, subject: string, message: string) => `
  <h2>New Contact Form Submission</h2>
  <p><strong>Name:</strong> ${name}</p>
  <p><strong>Email:</strong> ${email}</p>
  <p><strong>Subject:</strong> ${subject}</p>
  <p><strong>Message:</strong> ${message}</p>
`;