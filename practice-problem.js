// You are throwing a party and have a list of attendees.
    let partyInvites = ["Ashley", 
        "Chris", 
        "David", 
        "Kim"
    ]
    console.log(partyInvites);
// Someone new arrives—update your list.
    partyInvites.push("Frank");
    console.log(partyInvites);
// Unfortunately, the last person on your list had to cancel—adjust your list accordingly.
    partyInvites[3] = "Frank";
    partyInvites.pop()
    console.log(partyInvites)
// Finally, check who is still attending and print the updated list.
    console.log(partyInvites)