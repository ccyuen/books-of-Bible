
enum bookType {
    LAW,
    HISTORY,
    POETRY,
    MAJOR_PROPHETS,
    MINOR_PROPHETS,
    GOSPELS,
    EPISTLES,
    REVELATION,
}

const bibleBooksOT: { [key: string]: bookType} = {
    "Genesis": bookType.LAW,
    "Exodus": bookType.LAW,
    "Leviticus": bookType.LAW,
    "Numbers": bookType.LAW,
    "Deuteronomy": bookType.LAW,
    "Joshua": bookType.HISTORY,
    "Judges": bookType.HISTORY,
    "Ruth": bookType.HISTORY,
    "1 Samuel": bookType.HISTORY,
    "2 Samuel": bookType.HISTORY,
    "1 Kings": bookType.HISTORY,
    "2 Kings": bookType.HISTORY,
    "1 Chronicles": bookType.HISTORY,
    "2 Chronicles": bookType.HISTORY,
    "Ezra": bookType.HISTORY,
    "Nehemiah": bookType.HISTORY,
    "Esther": bookType.HISTORY,
    "Job": bookType.POETRY,
    "Psalms": bookType.POETRY,
    "Proverbs": bookType.POETRY,
    "Ecclesiastes": bookType.POETRY,
    "Song of Songs": bookType.POETRY,
    "Isaiah": bookType.MAJOR_PROPHETS,
    "Jeremiah": bookType.MAJOR_PROPHETS,
    "Lamentations": bookType.MAJOR_PROPHETS,
    "Ezekiel": bookType.MAJOR_PROPHETS,
    "Daniel": bookType.MAJOR_PROPHETS,
    "Hosea": bookType.MINOR_PROPHETS,
    "Joel": bookType.MINOR_PROPHETS,
    "Amos": bookType.MINOR_PROPHETS,
    "Obadiah": bookType.MINOR_PROPHETS,
    "Jonah": bookType.MINOR_PROPHETS,
    "Micah": bookType.MINOR_PROPHETS,
    "Nahum": bookType.MINOR_PROPHETS,
    "Habakkuk": bookType.MINOR_PROPHETS,
    "Zephaniah": bookType.MINOR_PROPHETS,
    "Haggai": bookType.MINOR_PROPHETS,
    "Zechariah": bookType.MINOR_PROPHETS,
    "Malachi": bookType.MINOR_PROPHETS,
}

const bibleBooksNT: { [key: string]: bookType} = {
    "Matthew": bookType.GOSPELS,
    "Mark": bookType.GOSPELS,
    "Luke": bookType.GOSPELS,
    "John": bookType.GOSPELS,
    "Acts": bookType.EPISTLES,
    "Romans": bookType.EPISTLES,
    "1 Corinthians": bookType.EPISTLES,
    "2 Corinthians": bookType.EPISTLES,
    "Galatians": bookType.EPISTLES,
    "Ephesians": bookType.EPISTLES,
    "Philippians": bookType.EPISTLES,
    "Colossians": bookType.EPISTLES,
    "1 Thessalonians": bookType.EPISTLES,
    "2 Thessalonians": bookType.EPISTLES,
    "1 Timothy": bookType.EPISTLES,
    "2 Timothy": bookType.EPISTLES,
    "Titus": bookType.EPISTLES,
    "Philemon": bookType.EPISTLES,
    "Hebrews": bookType.EPISTLES,
    "James": bookType.EPISTLES,
    "1 Peter": bookType.EPISTLES,
    "2 Peter": bookType.EPISTLES,
    "1 John": bookType.EPISTLES,
    "2 John": bookType.EPISTLES,
    "3 John": bookType.EPISTLES,
    "Jude": bookType.EPISTLES,
    "Revelation": bookType.REVELATION,
}

function checkBook() {
    const allBooks = {...bibleBooksOT, ...bibleBooksNT};

    // const userInput = document.getElementById("book").value.trim();
    // const resultDiv = document.getElementById("result");
    
    // if (bibleBooks.includes(userInput)) {
    //     resultDiv.innerHTML = `<span style="color: green;">Correct! "${userInput}" is a book of the Bible.</span>`;
    // } else {
    //     resultDiv.innerHTML = `<span style="color: red;">Incorrect. "${userInput}" is not a recognized book of the Bible.</span>`;
    // }

    function initInput() {
        const containerOT = document.getElementById('ot');
        for (let i = 0; i < Object.keys(bibleBooksOT).length; i++) {
            const input = document.createElement('input');
            input.type = 'text';
            input.id = '${i}';

            containerOT?.appendChild(input);
        }

        const containerNT = document.getElementById('nt');
        for (let i = Object.keys(bibleBooksOT).length; i < Object.keys(bibleBooksNT).length; i++) {
            const input = document.createElement('input');
            input.type = 'text';
            input.id = '${i}';

            containerNT?.appendChild(input);
        }
    }

    initInput();
}

