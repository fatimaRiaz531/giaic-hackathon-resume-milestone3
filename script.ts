// script.ts

document.addEventListener("DOMContentLoaded", () => {
  const resumeForm = document.getElementById("resumeForm") as HTMLFormElement;
  const resumeOutput = document.getElementById("resumeOutput") as HTMLDivElement;
  const resumeContent = document.getElementById("resumeContent") as HTMLDivElement;

  const educationList: string[] = [];
  const workList: string[] = [];
  const skillsList: string[] = [];

  document.getElementById("addEducation")!.addEventListener("click", () => {
      const educationInput = document.getElementById("education") as HTMLInputElement;
      if (educationInput.value) {
          educationList.push(educationInput.value);
          educationInput.value = "";
          updateEducationList();
      }
  });

  document.getElementById("addWork")!.addEventListener("click", () => {
      const workInput = document.getElementById("work") as HTMLInputElement;
      if (workInput.value) {
          workList.push(workInput.value);
          workInput.value = "";
          updateWorkList();
      }
  });

  document.getElementById("addSkill")!.addEventListener("click", () => {
      const skillInput = document.getElementById("skills") as HTMLInputElement;
      if (skillInput.value) {
          skillsList.push(skillInput.value);
          skillInput.value = "";
          updateSkillsList();
      }
  });

  resumeForm.addEventListener("submit", (event) => {
      event.preventDefault();
      generateResume();
  });

  function updateEducationList() {
      const educationListDiv = document.getElementById("educationList")!;
      educationListDiv.innerHTML = educationList.map(edu => `<p>${edu}</p>`).join("");
  }

  function updateWorkList() {
      const workListDiv = document.getElementById("workList")!;
      workListDiv.innerHTML = workList.map(work => `<p>${work}</p>`).join("");
  }

  function updateSkillsList() {
      const skillsListDiv = document.getElementById("skillsList")!;
      skillsListDiv.innerHTML = skillsList.map(skill => `<p>${skill}</p>`).join("");
  }

  function generateResume() {
      const name = (document.getElementById("name") as HTMLInputElement).value;
      const email = (document.getElementById("email") as HTMLInputElement).value;
      const phone = (document.getElementById("phone") as HTMLInputElement).value;
      const address = (document.getElementById("address") as HTMLInputElement).value;

      resumeContent.innerHTML = `
          <h3>${name}</h3>
          <p>Email: ${email}</p>
          <p>Phone: ${phone}</p>
          <p>Address: ${address}</p>
          <h4>Education</h4>
          <ul>
              ${educationList.map(edu => `<li>${edu}</li>`).join("")}
          </ul>
          <h4>Work Experience</h4>
          <ul>
              ${workList.map(work => `<li>${work}</li>`).join("")}
          </ul>
          <h4>Skills</h4>
          <ul>
              ${skillsList.map(skill => `<li>${skill}</li>`).join("")}
          </ul>
      `;

      resumeOutput.style.display = "block";
  }
});const skillsListDiv = document.getElementById("skillsList")