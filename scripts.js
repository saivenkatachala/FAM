// Hardcoded user credentials
const users = {
    sai: "9989634265",
    Hemadri: "9491358278",
    Pushpa: "9121123345",
    Mukunda: "9182422577"
};

// Hardcoded documents
const documents = {
    member1: [
        { name: "10TH MARKLIST", url: "2100031744 SSC.pdf" },
        { name: "INTER MARKLIST", url: "2100031744 INTER.pdf" },
        { name: "AADHAR", url: "2100031744_AADHAR.pdf" },
        { name: "PAN", url: "2100031744_PAN.jpg" },
        { name: "VOTER", url: "VOTER.pdf" },
        { name: "RATION CARD", url: "RATION.pdf" },
        { name: "PHOTO", url: "2100031744_A SAI VENKAT_PHOTO.jpg" },
        { name: "RESUME", url: "2100031744_RESUME.pdf" },
        { name: "1-1 Marklist", url: "2100031744_RESUME.pdf" },
        { name: "1-2 Marklist", url: "2100031744_RESUME.pdf" },
        { name: "2-1 Marklist", url: "2100031744_RESUME.pdf" },
        { name: "2-2 Marklist", url: "2100031744_RESUME.pdf" },
        { name: "3-1 Marklist", url: "2100031744_RESUME.pdf" },
        { name: "3-2 Marklist", url: "2100031744_RESUME.pdf" },
        { name: "4-1 Marklist", url: "2100031744_RESUME.pdf" },
        { name: "4-2 Marklist", url: "2100031744_RESUME.pdf" },
        { name: "AWS CP", url: "2100031744_A SAI VENKAT_AWS Certified Cloud Practitioner certificate.pdf" },
        { name: "AWS SAA", url: "2100031744_A SAI VENKAT_AWS Certified Solutions Architect - Associate certificate.pdf" },
        { name: "AZ-900", url: "2100031744_A SAI VENKAT_AZ-900.pdf" },
        { name: "Red Hat", url: "2100031744_Red_Hat_Certified_Enterprise_Application_Developer_Badge20230815-30-pj7zrb.pdf" },
        { name: "RPA", url: "2100031744_A SAI VENKAT_RPA.pdf" },
        
        
    ],
    member2: [
        { name: "Document 3", url: "/docs/member2/doc1.pdf" },
        { name: "Document 4", url: "/docs/member2/doc2.pdf" },
    ],
    member3: [
        { name: "Document 5", url: "/docs/member3/doc1.pdf" },
        { name: "Document 6", url: "/docs/member3/doc2.pdf" },
    ],
    member4: [
        { name: "AADHAR", url: "Adhaar Mukunda.pdf" },
        { name: "Caste", url: "Caste Mukunda.pdf" },
        { name: "DOB", url: "DOB mukunda.pdf" },
        { name: "EWS", url: "ews.pdf" },
        { name: "INCOME", url: "Income Mukunda.pdf" },
        { name: "Bonofide", url: "bonofide.pdf" },
        { name: "Inter Tc", url: "Inter TC Mukunda.pdf" },
        { name: "Ration card", url: "Ration card Mukunda.pdf" },
        { name: "Study Certificate", url: "Study certificates Mukunda.pdf" },
        { name: "12th certificate", url: "XII Marks memo Mukunda.pdf" },
        { name: "10th certificate", url: "10 th mark list Mukunda.pdf" },

    ],
};

// Handle login
function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (users[username] === password) {
        document.getElementById("login-page").style.display = "none";
        document.getElementById("member-selection-page").style.display = "block";
    } else {
        document.getElementById("login-error").textContent = "Invalid username or password";
    }
}

// Show documents for a specific member
function showMemberDocuments(member) {
    const memberTitle = document.getElementById("member-title");
    const documentList = document.getElementById("document-list");

    memberTitle.textContent = `Documents for ${member}`;
    documentList.innerHTML = "";

    documents[member].forEach(doc => {
        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${doc.name}</td>
            <td><iframe src="${doc.url}" width="100" height="50"></iframe></td>
            <td>
                <a href="${doc.url}" class="btn btn-primary" download>Download</a>
                <a href="https://api.whatsapp.com/send?text=Check this document: ${location.origin + doc.url}" target="_blank" class="btn btn-secondary">Share</a>
            </td>
        `;
        documentList.appendChild(row);
    });

    document.getElementById("member-selection-page").style.display = "none";
    document.getElementById("documents-page").style.display = "block";
}

// Filter documents
function filterDocuments() {
    const searchValue = document.getElementById("search-bar").value.toLowerCase();
    const rows = document.querySelectorAll("#document-list tr");

    rows.forEach(row => {
        const docName = row.children[0].textContent.toLowerCase();
        row.style.display = docName.includes(searchValue) ? "" : "none";
    });
}

// Go back to member selection
function goBackToMembers() {
    document.getElementById("documents-page").style.display = "none";
    document.getElementById("member-selection-page").style.display = "block";
}
