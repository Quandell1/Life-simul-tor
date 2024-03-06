// Get the game container and choice buttons
const gameContainer = document.querySelector('.game-container');
const chooseWork = document.getElementById('work-btn');
const chooseStudy = document.getElementById('study-btn');
const chooseRelax = document.getElementById('relax-btn');
const chooseSocialize = document.getElementById('socialize-btn');

// Set up the game state
let age = 18;
let education = 'High School Diploma';
let job = null;
let money = 0;

// Function to update the game state and render the new UI
function updateGameState() {
  // Update age
  age++;

  // Check if the player has a job
  if (job === null) {
    // If not, offer them a random job
    job = getRandomJob();
  }

  // Update education
  if (education === 'High School Diploma') {
    // If the player has a high school diploma, they can study for college entrance exams
    education = 'College Degree';
  } else if (education === 'College Degree') {
    // If the player has a college degree, they can work or relax
    education = 'Graduate Degree';
  }

  // Update money
  if (job !== null) {
    // If the player has a job, give them a salary
    money += getSalary(job);
  }

  // Render the updated UI
  renderUI();
}

// Function to get a random job for the player
function getRandomJob() {
  const jobs = ['Office Job', 'Retail Job', 'Service Industry Job', 'Tech Job'];
  return jobs[Math.floor(Math.random() * jobs.length)];
}

// Function to get the salary for a given job
function getSalary(job) {
  const salaries = {
    'Office Job': 50000,
    'Retail Job': 30000,
    'Service Industry Job': 40000,
    'Tech Job': 70000
  };
  return salaries[job];
}

// Function to render the game UI
function renderUI() {
  // Clear the previous UI
  gameContainer.innerHTML = '';

  // Add the stats section
  const statsSection = document.createElement('div');
  statsSection.classList.add('stats');
  gameContainer.appendChild(statsSection);

  // Add the age stat
  const ageStat = document.createElement('p');
  ageStat.textContent = `Age: ${age}`;
  statsSection.appendChild(ageStat);

  // Add the education stat
  const educationStat = document.createElement('p');
  educationStat.textContent = `Education: ${education}`;
  statsSection.appendChild(educationStat);

  // Add the job stat
  const jobStat = document.createElement('p');
  jobStat.textContent = `Job: ${job}`;
  statsSection.appendChild(jobStat);

  // Add the money stat
  const moneyStat = document.createElement('p');
  moneyStat.textContent = `Money: $${money}`;
  statsSection.appendChild(moneyStat);

  // Add the choice buttons
  const choicesSection = document.createElement('div');
  choicesSection.classList.add('choices');
  gameContainer.appendChild(choicesSection);

  // Add the work button
  const workButton = document.createElement('button');
  workButton.textContent = 'Work';
  workButton.addEventListener('click', () => {
    chooseWork.disabled = false;
    chooseStudy.disabled = true;
    chooseRelax.disabled = true;
    chooseSocialize.disabled = true;
  });
  choicesSection.appendChild(workButton);

  // Add the study button
  const studyButton = document.createElement('button');
  studyButton.textContent = 'Study for College Entrance Exams';
  studyButton.addEventListener('click', () => {
    chooseWork.disabled = true;
    chooseStudy.disabled = false;
    chooseRelax.disabled = true;
    chooseSocialize.disabled = true;
  });
  choicesSection.appendChild(studyButton);

  // Add the relax button
  const relaxButton = document.createElement('button');
  relaxButton.textContent = 'Relax';
  relaxButton.addEventListener('click', () => {
    chooseWork.disabled = true;
    chooseStudy.disabled = true;
    chooseRelax.disabled = false;
    chooseSocialize.disabled = true;
  });
  choicesSection.appendChild(relaxButton);

  // Add the socialize button
  const socializeButton = document.createElement('button');
  socializeButton.textContent = 'Go Out with Friends';
  socializeButton.addEventListener('click', () => {
    chooseWork.disabled = true;
    chooseStudy.disabled = true;
    chooseRelax.disabled = true;
    chooseSocialize.disabled = false;
  });
  choicesSection.appendChild(socializeButton);
}

// Start the game loop
setInterval(updateGameState, 1000);
// Start the game loop
