module.exports = survey => {
    return `
        <html>
            <body>
                <div style="text-align: center;">
                    <h3>I'd like your feedvback</h3>
                    <p>Did you like our product?</p>
                    <p>${survey.body}</p>
                    <div>
                        <a href="http://localhost:3000">Yes</a>
                    </div>
                    <div>
                        <a href="http://localhost:3000">No</a>
                    </div>
                </div>
            </body>
        </html>
    `;
};