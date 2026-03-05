let teamsData = [];

// Load teams data from JSON
fetch('teams.json')
    .then(response => response.json())
    .then(data => {
        teamsData = data;
        renderTeams();
    })
    .catch(error => console.error('Error loading teams:', error));

// Render teams dynamically
function renderTeams() {
    const teamsList = document.getElementById('teams');
    const teamBlockDiv = document.getElementById('team-blocks');

    if (!teamsList || !teamBlockDiv) return;

    // Clear existing content
    teamsList.innerHTML = '';
    teamBlockDiv.innerHTML = '';

    teamsData.forEach(team => {
        // Create navigation item
        const li = document.createElement('li');
        const link = document.createElement('a');
        link.className = '';
        link.title = 'Show metadata';
        link.onclick = () => toggleTeamMetadata(team.id);
        link.textContent = team.name;
        li.appendChild(link);
        teamsList.appendChild(li);

        // Create team details table
        const table = document.createElement('table');
        table.className = 'metadata';
        table.id = team.id + '_metadata';

        const tbody = document.createElement('tbody');

        // Team name row
        const nameRow = document.createElement('tr');
        nameRow.innerHTML = `
            <td class="team-left-header">Team name:</td>
            <td colspan="5" class="team-name">${team.name}</td>
        `;
        tbody.appendChild(nameRow);

        // Team members row
        const membersRow = document.createElement('tr');
        membersRow.innerHTML = '<td class="team-left-header">Team members:</td>';
        team.members.forEach(member => {
            const td = document.createElement('td');
            td.className = 'team-member-name';
            td.innerHTML = member.lead ? `<b>${member.name}</b>` : member.name;
            membersRow.appendChild(td);
        });
        tbody.appendChild(membersRow);

        // Affiliations row
        const affiliationsRow = document.createElement('tr');
        affiliationsRow.innerHTML = '<td class="team-left-header">Affiliation:</td>';
        team.members.forEach(member => {
            const td = document.createElement('td');
            td.className = 'team-member-affiliation';
            td.textContent = member.affiliation;
            affiliationsRow.appendChild(td);
        });
        tbody.appendChild(affiliationsRow);

        table.appendChild(tbody);
        const divWrapper = document.createElement('div');
        divWrapper.className = 'team-block-div';
        divWrapper.appendChild(table);
        teamBlockDiv.appendChild(divWrapper);
    });
}

// Toggle team metadata visibility
function toggleTeamMetadata(teamId) {
    const metadataElements = document.getElementsByClassName('metadata');
    for (let i = 0; i < metadataElements.length; i++) {
        metadataElements[i].style.display = 'none';
    }

    const element = document.getElementById(teamId + '_metadata');
    if (element) {
        element.style.display = 'block';
    }
}

$('a[href="#dates"]').click(function(){
    $("#dates").css("padding-top", "500px");
});