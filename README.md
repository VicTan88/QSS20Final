# QSS 20 Final Project

## Overview
The project utilizes data from Facebook that contain #tcm and pulls data from the past year. The purpose of the project is to analyze post caption data to determine the changing use of #tcm by various types of accounts. While the acronym tcm has various other meanings, this project specifically analyzes tcm as Traditional Chinese Medicine. This project focus is linked to the chinamaxxing trend that has caused an increase in interest in specific parts of Chinese culture. 

Through this analysis, the project tracks how independent creators navigate commercialization and professionalization over time. The results reveal that commercialization is a non-linear process. The model demonstrates that rather than over commercializing indefinitely, creators in the #tcm space strategically limit explicit business signals to protect audience trust and their social capital. 

## Order to Run
1. [00_pull_&_clean.ipynb](Code/00_pull_&_clean.ipynb)
    - **Takes in:**
   [#tcm Data May2025 - November2025](Data/tcm_social_data_1year.csv)
   [#tcm Data November2025 - May2026](Data/tcm_social_data_6months.csv)
  - **What it does:**
    - Pulls the original social media data.
    - Views counts of account types and languages.
    - Filters the dataframe to only include posts in English, separates the post captions and hashtags into separate columns.
    - Visualizes the number and proportion of #tcm posts over time, the number and proportion of unique accounts over time, and total number of participating accounts over time.
  - **Notebook Outputs:**
    - [Cleaned Data](Data/cleanedData.csv)
    - ![#tcm Proportion of Posts Over Time](Outputs/tcm__proportion_posts_over_time.png)
    - ![#tcm Posts Over Time](Outputs/tcm_posts_over_time.png)
    - ![#tcm Proportion of Unique Users Over Time](Outputs/tcm_proportion_unique_users_over_time.png)
    - ![#tcm Total New Users Over Time](Outputs/tcm_total_new_users_over_time.png)
    - Cleaned structured data files containing separated text corpuses for modeling.
    - Initial visualizations mapping the count and proportion of posts over time given different account types. 

2. [01_analyse.ipynb](Code/01_analyze.ipynb)
   - **Takes in:**
     -[Cleaned Data](Data/cleanedData.csv)
     - The cleaned dataset generated from the previous notebook.
   - **What it does:**
     - Trains and optimizes a machine learning classifier tuned to differentiate between personal, community-focused content and explicit commercial text signals.
     - Runs the cleaned data through the model to track and analyze changes in usage by repeat creator accounts over time, capturing the stabilization ceiling from 2025 to 2026.
     - Identifies a flaw in evaluating platform professionalization solely through text-based caption analysis. This includes documenting how creators adapt to algorithmic biases
   - **Notebook Outputs:**
     - ![Visualization 1](Outputs/vis1.png)
     - ![Visualization 2](Outputs/vis2.png)
     - ![Visualization 3](Outputs/vis3.png)
