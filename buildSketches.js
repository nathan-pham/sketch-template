const fs = require("fs");

const separateSketch = (name) => {
    const capitalizeArray = (title) =>
        title
            .map((word) =>
                word.length < 3
                    ? word
                    : word.charAt(0).toUpperCase() + word.slice(1)
            )
            .join(" ")
            .replace(".html", "");

    const [number, ...title] = name.split("_");
    return [parseInt(number), capitalizeArray(title), name];
};

const buildSketches = () => {
    const sketchesDir = "sketches";
    const sketches = fs
        .readdirSync(sketchesDir)
        .map(separateSketch)
        .sort((a, b) => a[0] - b[0]);

    const html = [];

    for (const [number, title, sketch] of sketches) {
        html.push(`
            <li class="wrapper__list__item">
            <a href="/sketches/${sketch}" target="_blank">
                Sketch ${number.toString().padStart(3, "0")}: ${title}
            </a>
            </li>
        `);
    }

    const indexContent = fs.readFileSync("index.html", "utf-8");

    const startTag = `<ul class="wrapper__list">`;
    const endTag = `</ul>`;

    const startIndex = indexContent.indexOf(startTag);
    const endIndex = indexContent.indexOf(endTag);

    const compiledIndexContent = `
        ${indexContent.slice(0, startIndex + startTag.length)}
        ${html.join("\n")}
        ${indexContent.slice(endIndex)}
    `.trim();

    fs.writeFileSync("index.html", compiledIndexContent);
};

buildSketches();
