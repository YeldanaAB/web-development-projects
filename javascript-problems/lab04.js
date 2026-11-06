// Problem 1: Event Timeline

const events = [
    {title: "Halloween", date: "2026-10-31"},
    {title: "Halloween Last Year", date: "2025-10-31"},
    {title: "Christmas", date: "2026-12-25"},
    {title: "Valentine's Day", date: "2027-02-14"}
];

function showEvents(){
    events.forEach((val) => {
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        const eventDate = new Date(val.date + "T00:00:00");
        const year = eventDate.getFullYear();
        const month = eventDate.getMonth() + 1;
        const day = eventDate.getDate();
        const formattedDate = year + "-" +
            String(month).padStart(2, "0") + "-" +
            String(day).padStart(2, "0");
        const difference = eventDate - today;
        const days = Math.round(difference / (1000 * 60 * 60 * 24));

        if (days > 0){
            document.write("<p style='color:green;'>" + val.title + " " + formattedDate + " " + days + " days remaining</p>");
        }
        else if (days < 0){
            document.write("<p style='color:grey;'>" + val.title + " " + formattedDate + " Passed " + Math.abs(days) + " days ago</p>");
        }
        else{
            document.write("<p style='color:orange;'>" + val.title + " " + formattedDate + " Happening Today!</p>");
        }
    });
}

// Problem 2: Palindrome Evaluator
const testStrings = [
    "Mr. Owl ate my metal worm.",
    "I’m on a seafood diet. I see food and I eat it.",
    "level",
    "Love is sharing your popcorn.",
    "Was it a car or a cat I saw?",
    "racecar",
    "Hello World"
];

function sanitizeString(str){
    return str.toLowerCase().replace(/[^a-z0-9]/g, "");
}

function isPalindrome(str){
    const cleaned = sanitizeString(str);
    const reversed = cleaned.split("").reverse().join("");
    return cleaned === reversed;
}

function showPalindromes(){
    testStrings.forEach((val) => {
        if (isPalindrome(val)){
            document.write("<p style='color:red; font-weight:bold;'>" + val + " - Palindrome</p>");
        }
        else {
            document.write("<p style='color:grey; font-style:italic;'>" + val + " - Not a Palindrome</p>");
        }
    });
}