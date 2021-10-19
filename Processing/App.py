#!/usr/bin/env python
# coding: utf-8

# In[ ]:


import wx, tensorflow
# import cv2
import numpy as np
from tensorflow.keras.preprocessing import image
model = tensorflow.keras.models.load_model('xray.h5')


class MyFrame(wx.Frame):
   
    def __init__(self):
        
        super().__init__(parent=None, title='X-RAY COVID-19 DETECTION TOOL')
        self.SetSize(wx.Size(550, 300))
                
        panel = wx.Panel(self)        
        my_sizer = wx.BoxSizer(wx.VERTICAL)
        
        self.step1 = wx.StaticText(panel,-1,style = wx.ST_ELLIPSIZE_END)
        self.step1.SetLabel('Step1: Click on the button below to choose an image for analysis.')
        my_sizer.Add(self.step1,0,wx.ALL | wx.LEFT, 5)
        
        self.step2 = wx.StaticText(panel,-1,style = wx.ST_ELLIPSIZE_END)
        self.step2.SetLabel('Step2: Upload a chest X-Ray image in a PNG or JPEG format.\nYou can change the extension preferred by clicking on the dropdown box on bottom right.')
#         self.step2.Wrap(200)
        my_sizer.Add(self.step2,0,wx.ALL | wx.EXPAND, 5)
        
        self.step3 = wx.StaticText(panel,-1,style = wx.ST_ELLIPSIZE_END)
        self.step3.SetLabel('Step3: Wait a few second while the software processes the image. \nYou will get the diagnosis in an alert box.')
        my_sizer.Add(self.step3,0,wx.ALL | wx.EXPAND, 5)
        
        my_sizer.AddStretchSpacer()
        
        self.my_btn = wx.Button(panel, label='Select Image')
        self.my_btn.Bind(wx.EVT_BUTTON, self.OnBrowse)
        my_sizer.Add(self.my_btn, 0, wx.ALL | wx.EXPAND, 5)
        
        self.result = wx.StaticText(panel,-1,style = wx.ALIGN_LEFT)
        self.result.SetLabel('') 
        my_sizer.Add(self.result, 0, wx.ALL | wx.CENTER, 5)
        panel.SetSizer(my_sizer)        
        self.Show()

        
    def OnBrowse(self, event):
    
        wildcard = 'PNG files (*.png)|*.png|JPEG files (*.jpg)|*.jpg'
#         openFileDialog = wx.FileDialog(self, "Open", "", "", wildcard,
#                                        wx.FD_OPEN | wx.FD_FILE_MUST_EXIST)

        with wx.FileDialog(self, "Open XYZ file", wildcard=wildcard,
                       style=wx.FD_OPEN | wx.FD_FILE_MUST_EXIST) as fileDialog:

            if fileDialog.ShowModal() == wx.ID_CANCEL:
                return
#             openFileDialog.ShowModal()
            url = fileDialog.GetPath()

            img = image.load_img(url,target_size = (224, 224))
            img = image.img_to_array(img)
            img=img.astype('float32')/255.
            img=np.expand_dims(img,axis=0)
            
            results = model.predict(img)
            result = results.argmax(axis=-1)

            if (result == 0):
                wx.MessageBox('COVID-19 Detected! :(', 'Result', wx.OK | wx.ICON_EXCLAMATION)
            elif (result == 1):
                wx.MessageBox('No Disease Detected! :)', 'Result', wx.OK | wx.ICON_INFORMATION)
            elif (result == 2):
                wx.MessageBox('Viral Pneumonia Detected! :(', 'Result', wx.OK | wx.ICON_WARNING)
            else:
                wx.MessageBox('Error in finding Result! :|', 'Result', wx.OK | wx.ICON_EXCLAMATION)
                

            event.Skip()

if __name__ == '__main__':
    app = wx.App()
    frame = MyFrame()
    #frame.SetIcon(wx.Icon("logo.png"))
    app.MainLoop()


# In[ ]:




