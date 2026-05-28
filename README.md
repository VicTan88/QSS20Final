# QSS 20 Final Project

## Overview
The project utilizes data from Facebook that contain #tcm and pulls data from the past year. The purpose of the project is to analyse post caption data to determine the changing use of #tcm by various types of accounts. While the acronym tcm has various other meanings, this project specifically analyzes tcm as Traditional Chinese Medicine. This project focus is linked to the chinamaxxing trend that has caused an increase in interest in specifc parts of Chinese culture. 

## Order to Run
1. [DataPull&Clean.ipynb](Code/DataPull&Clean.ipynb)
  - Takes in:
      [Dataset](../Data/tcm_social_data_1year.csv)

  - What it does:
    - Pulls the original social media data.
    - Views counts of account types and languages.
    - Filters the dataframe to only include posts in English, separates the post captions and hashtags into separate columns.
    - Visualizes the number and proportion of #tcm posts over time, the number and proportion of unique accounts over time, and total number of participating accounts over time.

2. [Analyze.ipynb](Code/Analyze.ipynb)
   - Takes in:
       The cleaned data set from the previous notebook.

   - What it does:
       - Trains a model to determine if a post caption furthers personal content or aims to sell a product.
       - Runs the data through the model to analyze if there is a change in usage by repeat creator accounts over time. 
