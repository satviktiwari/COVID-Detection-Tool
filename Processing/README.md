# COVID-19 Detection
A tool to help healthcare workers identify COVID-19 in X-Ray images

## Table of Contents

- [Overview](#overview)
- [Getting Startrted](#requirements)
  * [Requirements](#requirements)
  * [Usage](#Usage)

## Overview
To help in the fight against the COVID-19 pandemic, we developed a tool that utilizes transfer learning via the convolutional neural network VGG19 to detect the presence of COVID-19 in chest X-Ray images. This tool reads as input chest X-Ray image and returns a diagnosis on whether the patient suffers from COVID-19, pneumonia, or neither.

## Getting Started
### Requirements
The model and the GUI were built using Python.
- [Python](https://www.python.org/)
- [wxPython](https://www.wxpython.org/)
- [Tensorflow](https://www.tensorflow.org/)


### Usage
After downloading the program, run the script titled `App.py` and the application will start.
You will see the home page of the application, where simple instructions on how to use the application are written.
Once you click on the button at the bottom of the page titled `Select image`, a prompt will appear asking for the X-Ray image of the patient.
After selecting the image, the program will use the pre-trained model to make a diagnosis for the patient.
The diagnosis will appear as a pop-up notification.

