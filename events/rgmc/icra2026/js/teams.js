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

    teamsData.forEach((team, index) => {
        // Create navigation item
        const li = document.createElement('li');
        const link = document.createElement('a');
        link.className = index === 0 ? 'active' : '';
        link.title = 'Show team details';
        link.href = '#';
        link.textContent = team.name;
        link.onclick = (e) => {
            e.preventDefault();
            toggleTeamMetadata(team.id);
            // Update active state in navigation
            document.querySelectorAll('#teams a').forEach(a => a.classList.remove('active'));
            link.classList.add('active');
        };
        li.appendChild(link);
        teamsList.appendChild(li);

        // Create team details table
        const table = document.createElement('table');
        table.className = 'metadata' + (index === 0 ? ' active' : '');
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
        const memberHeaderTd = document.createElement('td');
        memberHeaderTd.className = 'team-left-header';
        memberHeaderTd.textContent = 'Team members:';
        membersRow.appendChild(memberHeaderTd);
        
        team.members.forEach(member => {
            const td = document.createElement('td');
            td.className = 'team-member-name';
            td.innerHTML = member.lead ? `<b>${member.name}</b>` : member.name;
            membersRow.appendChild(td);
        });
        tbody.appendChild(membersRow);

        // Affiliations row
        const affiliationsRow = document.createElement('tr');
        const affiliationHeaderTd = document.createElement('td');
        affiliationHeaderTd.className = 'team-left-header';
        affiliationHeaderTd.textContent = 'Affiliation:';
        affiliationsRow.appendChild(affiliationHeaderTd);
        
        team.members.forEach(member => {
            const td = document.createElement('td');
            td.className = 'team-member-affiliation';
            td.textContent = member.affiliation;
            affiliationsRow.appendChild(td);
        });
        tbody.appendChild(affiliationsRow);

        // Technical report row (only rendered if the team has one)
        if (team.report) {
            const reportRow = document.createElement('tr');
 
            const reportValueTd = document.createElement('td');
            reportValueTd.colSpan = 6;
            reportValueTd.style.textAlign = 'left';
            reportValueTd.style.border = 'none';
 
            const reportFrame = document.createElement('iframe');
            reportFrame.className = 'report-embed';
            reportFrame.src = `${team.report.file}#toolbar=0&navpanes=0&scrollbar=1`;
            reportFrame.title = team.report.title;
            reportFrame.width = '100%';
            reportFrame.height = '500';
            reportFrame.setAttribute('oncontextmenu', 'return false;');
            reportValueTd.appendChild(reportFrame);
 
            reportRow.appendChild(reportValueTd);
 
            tbody.appendChild(reportRow);
        }
 
        // Code row (only rendered if the team has one)
        if (team.code) {
            const codeRow = document.createElement('tr');
            const codeHeaderTd = document.createElement('td');
            codeHeaderTd.style.textAlign = 'left';
            codeHeaderTd.style.border = 'none';
            codeHeaderTd.textContent = 'Code:';
            codeRow.appendChild(codeHeaderTd);
 
            const codeValueTd = document.createElement('td');
            codeValueTd.colSpan = 4;
            codeValueTd.style.textAlign = 'left';
            codeValueTd.style.border = 'none';
            codeValueTd.innerHTML = `<a href="${team.code.url}" target="_blank"><u>${team.code.label || team.code.url}</u></a>`;
            codeRow.appendChild(codeValueTd);
 
            tbody.appendChild(codeRow);
        }

        table.appendChild(tbody);
        const divWrapper = document.createElement('div');
        divWrapper.className = 'team-block-div';
        divWrapper.appendChild(table);
        teamBlockDiv.appendChild(divWrapper);
    });
}

// Toggle team metadata visibility
function toggleTeamMetadata(teamId) {
    const metadataElements = document.querySelectorAll('.metadata');
    metadataElements.forEach(el => el.classList.remove('active'));

    const element = document.getElementById(teamId + '_metadata');
    if (element) {
        element.classList.add('active');
    }
}