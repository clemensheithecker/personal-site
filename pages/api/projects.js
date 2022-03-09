export default function handler(req, res) {
  res.status(200).json([
    {
      id: "clickbait-headline-classification",
      title: "Machine Learning Clickbait Headline Classification",
      description:
        "Detection of clickbait in headlines via natural language processing using Python and NLTK.",
      tags: ["Python", "NLTK"],
      link: "https://github.com/clemensheithecker/clickbait-headline-classification",
      gradient: "from-rose-400 to-orange-300",
    },
    {
      id: "nyc-bike-sharing",
      title: "NYC Bike Sharing Database, Analysis & Visualization",
      description:
        "Analysis of ride-sharing patterns based on the weather using MySQL, Python, and Seaborn.",
      tags: ["MySQL", "Python", "Seaborn"],
      link: "https://github.com/clemensheithecker/nyc-bike-sharing",
      gradient: "from-fuchsia-500 to-indigo-500",
    },
    {
      id: "clickbait-headline-classification",
      title: "European EV Market Performance Dashboard",
      description:
        "Data sourcing, forecasting, and visualization using MS Excel and Power BI.",
      tags: ["MS Excel", "MS Power BI"],
      link: "https://github.com/clemensheithecker/ev-market-europe",
      gradient: "from-sky-400 to-blue-500",
    },
    {
      id: "clickbait-headline-classification",
      title: "Data Visualization of Demographic Change in Europe",
      description:
        "Data transformation and visualization using R and Tidyverse.",
      tags: ["R", "Tidyverse"],
      link: "https://github.com/clemensheithecker/demographic-change-germany",
      gradient: "from-cyan-600 to-blue-600",
    },
  ]);
}
