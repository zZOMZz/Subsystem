const defaultText = `### target label is 0, EPOCH is 500, Learning Rate is 0.010000
Epoch 1:
 Train:
CE Loss: 0.0143 | Clean Acc: 31.4673 | Bd Acc: 32.2158 | Cross Acc: 34.0037
 Eval:
Clean Acc: 42.6467 - Best: 0.0000 | Bd Acc: 21.1267 - Best: 0.0000 | Cross: 41.3600
 Saving...
Epoch 2:
 Train:
CE Loss: 0.0116 | Clean Acc: 48.0399 | Bd Acc: 19.5062 | Cross Acc: 43.3272
 Eval:
Clean Acc: 55.1533 - Best: 42.6467 | Bd Acc: 24.4933 - Best: 21.1267 | Cross: 50.4667
 Saving...
Epoch 3:
 Train:
CE Loss: 0.0102 | Clean Acc: 55.6461 | Bd Acc: 24.7181 | Cross Acc: 49.9086
 Eval:
Clean Acc: 60.5000 - Best: 55.1533 | Bd Acc: 28.2867 - Best: 24.4933 | Cross: 56.4000
 Saving...
Epoch 4:
 Train:
CE Loss: 0.0091 | Clean Acc: 60.8944 | Bd Acc: 29.6861 | Cross Acc: 55.3931
 Eval:
Clean Acc: 65.2200 - Best: 60.5000 | Bd Acc: 31.9067 - Best: 28.2867 | Cross: 58.5200
 Saving...
Epoch 5:
 Train:
CE Loss: 0.0084 | Clean Acc: 64.5323 | Bd Acc: 32.9168 | Cross Acc: 57.7697
 Eval:
Clean Acc: 62.8333 - Best: 65.2200 | Bd Acc: 24.2867 - Best: 31.9067 | Cross: 58.3133
Epoch 6:
 Train:
CE Loss: 0.0077 | Clean Acc: 66.8452 | Bd Acc: 39.2258 | Cross Acc: 60.3291
 Eval:
Clean Acc: 69.1467 - Best: 65.2200 | Bd Acc: 30.8000 - Best: 31.9067 | Cross: 62.9867
 Saving...
Epoch 7:
 Train:
CE Loss: 0.0072 | Clean Acc: 69.0780 | Bd Acc: 48.3084 | Cross Acc: 63.6197
 Eval:
Clean Acc: 69.8267 - Best: 69.1467 | Bd Acc: 43.1200 - Best: 30.8000 | Cross: 65.3000
 Saving...
Epoch 8:
 Train:
CE Loss: 0.0068 | Clean Acc: 70.8905 | Bd Acc: 53.5203 | Cross Acc: 62.8885
 Eval:
Clean Acc: 72.1000 - Best: 69.8267 | Bd Acc: 49.1733 - Best: 43.1200 | Cross: 66.3400
 Saving...
Epoch 9:
 Train:
CE Loss: 0.0063 | Clean Acc: 71.9973 | Bd Acc: 64.2487 | Cross Acc: 69.8355
 Eval:
Clean Acc: 74.0867 - Best: 72.1000 | Bd Acc: 62.4600 - Best: 49.1733 | Cross: 68.0000
 Saving...
Epoch 10:
 Train:
CE Loss: 0.0059 | Clean Acc: 73.5019 | Bd Acc: 70.6797 | Cross Acc: 70.3839
 Eval:
Clean Acc: 75.1933 - Best: 74.0867 | Bd Acc: 57.2333 - Best: 62.4600 | Cross: 70.8533
 Saving...
Epoch 11:
 Train:
CE Loss: 0.0056 | Clean Acc: 75.1027 | Bd Acc: 73.9714 | Cross Acc: 64.5338
 Eval:
Clean Acc: 75.0467 - Best: 75.1933 | Bd Acc: 77.3133 - Best: 57.2333 | Cross: 69.0267
Epoch 12:
 Train:
CE Loss: 0.0053 | Clean Acc: 76.2319 | Bd Acc: 78.1469 | Cross Acc: 69.1042
 Eval:
Clean Acc: 75.4667 - Best: 75.1933 | Bd Acc: 87.5000 - Best: 57.2333 | Cross: 69.9933
 Saving...
Epoch 13:
 Train:
CE Loss: 0.0050 | Clean Acc: 77.5375 | Bd Acc: 81.9872 | Cross Acc: 70.2011
 Eval:
Clean Acc: 75.6000 - Best: 75.4667 | Bd Acc: 70.3667 - Best: 87.5000 | Cross: 68.7600
 Saving...
Epoch 14:
 Train:
CE Loss: 0.0046 | Clean Acc: 78.7213 | Bd Acc: 85.7970 | Cross Acc: 69.1042
 Eval:
Clean Acc: 76.1667 - Best: 75.6000 | Bd Acc: 91.4267 - Best: 70.3667 | Cross: 69.4600
 Saving...
Epoch 15:
 Train:
CE Loss: 0.0044 | Clean Acc: 79.8056 | Bd Acc: 86.4675 | Cross Acc: 72.9433
 Eval:
Clean Acc: 74.4667 - Best: 76.1667 | Bd Acc: 92.5467 - Best: 91.4267 | Cross: 70.1667
Epoch 16:
 Train:
CE Loss: 0.0042 | Clean Acc: 80.4279 | Bd Acc: 88.1439 | Cross Acc: 72.2121
 Eval:
Clean Acc: 77.7400 - Best: 76.1667 | Bd Acc: 90.8867 - Best: 91.4267 | Cross: 69.6800
 Saving...
Epoch 17:
 Train:
CE Loss: 0.0040 | Clean Acc: 81.1369 | Bd Acc: 90.0030 | Cross Acc: 75.8684
 Eval:
Clean Acc: 78.7067 - Best: 77.7400 | Bd Acc: 87.0800 - Best: 90.8867 | Cross: 70.2467
 Saving...
Epoch 18:
 Train:
CE Loss: 0.0039 | Clean Acc: 81.8298 | Bd Acc: 90.3993 | Cross Acc: 77.6965
 Eval:
Clean Acc: 77.2733 - Best: 78.7067 | Bd Acc: 88.9933 - Best: 87.0800 | Cross: 68.8133
Epoch 19:
 Train:
CE Loss: 0.0037 | Clean Acc: 82.5356 | Bd Acc: 91.6184 | Cross Acc: 76.4168
 Eval:
Clean Acc: 78.6000 - Best: 78.7067 | Bd Acc: 86.7867 - Best: 87.0800 | Cross: 70.0733
Epoch 20:
 Train:
CE Loss: 0.0035 | Clean Acc: 83.4082 | Bd Acc: 92.4718 | Cross Acc: 74.0402
 Eval:
Clean Acc: 78.8000 - Best: 78.7067 | Bd Acc: 94.8867 - Best: 87.0800 | Cross: 72.5467
 Saving...
Epoch 21:
 Train:
CE Loss: 0.0035 | Clean Acc: 83.7001 | Bd Acc: 92.7766 | Cross Acc: 76.7825
 Eval:
Clean Acc: 79.6267 - Best: 78.8000 | Bd Acc: 89.8400 - Best: 94.8867 | Cross: 72.8200
 Saving...
Epoch 22:
 Train:
CE Loss: 0.0034 | Clean Acc: 84.0594 | Bd Acc: 93.1423 | Cross Acc: 74.2230
 Eval:
Clean Acc: 79.0533 - Best: 79.6267 | Bd Acc: 94.5200 - Best: 89.8400 | Cross: 73.4733
Epoch 23:
 Train:
CE Loss: 0.0032 | Clean Acc: 85.1950 | Bd Acc: 93.4471 | Cross Acc: 76.5996
 Eval:
Clean Acc: 79.4600 - Best: 79.6267 | Bd Acc: 98.2200 - Best: 89.8400 | Cross: 74.6533
Epoch 24:
 Train:
CE Loss: 0.0031 | Clean Acc: 85.2111 | Bd Acc: 93.9957 | Cross Acc: 76.0512
 Eval:
Clean Acc: 79.6667 - Best: 79.6267 | Bd Acc: 90.4533 - Best: 89.8400 | Cross: 73.2867
 Saving...
Epoch 25:
 Train:
CE Loss: 0.0030 | Clean Acc: 85.6410 | Bd Acc: 94.3310 | Cross Acc: 78.6106
 Eval:
Clean Acc: 79.5733 - Best: 79.6667 | Bd Acc: 96.3000 - Best: 90.4533 | Cross: 72.1867
 Saving...
Epoch 26:
 Train:
CE Loss: 0.0029 | Clean Acc: 86.4045 | Bd Acc: 94.0567 | Cross Acc: 80.6216
 Eval:
Clean Acc: 80.9133 - Best: 79.5733 | Bd Acc: 92.9400 - Best: 96.3000 | Cross: 75.6067
 Saving...
Epoch 27:
 Train:
CE Loss: 0.0028 | Clean Acc: 86.8343 | Bd Acc: 94.6967 | Cross Acc: 77.6965
 Eval:
Clean Acc: 80.6667 - Best: 80.9133 | Bd Acc: 96.2933 - Best: 92.9400 | Cross: 74.2067
Epoch 28:
 Train:
CE Loss: 0.0028 | Clean Acc: 87.1199 | Bd Acc: 94.5443 | Cross Acc: 78.2450
 Eval:
Clean Acc: 80.1600 - Best: 80.9133 | Bd Acc: 98.3733 - Best: 92.9400 | Cross: 75.0867
Epoch 29:
 Train:
CE Loss: 0.0027 | Clean Acc: 87.1231 | Bd Acc: 94.9101 | Cross Acc: 82.2669
 Eval:
Clean Acc: 79.7867 - Best: 80.9133 | Bd Acc: 94.8067 - Best: 92.9400 | Cross: 74.6267
Epoch 30:
 Train:
CE Loss: 0.0026 | Clean Acc: 87.8449 | Bd Acc: 94.6967 | Cross Acc: 83.1810
 Eval:
Clean Acc: 78.8933 - Best: 80.9133 | Bd Acc: 98.4733 - Best: 92.9400 | Cross: 74.1400
Epoch 31:
 Train:
CE Loss: 0.0025 | Clean Acc: 88.0277 | Bd Acc: 95.3977 | Cross Acc: 80.6216
 Eval:
Clean Acc: 81.2533 - Best: 80.9133 | Bd Acc: 97.7867 - Best: 92.9400 | Cross: 75.5600
 Saving...
Epoch 32:
 Train:
CE Loss: 0.0025 | Clean Acc: 87.9443 | Bd Acc: 95.2454 | Cross Acc: 79.1590
 Eval:
Clean Acc: 80.5133 - Best: 81.2533 | Bd Acc: 92.5133 - Best: 97.7867 | Cross: 75.6000
Epoch 33:
 Train:
CE Loss: 0.0024 | Clean Acc: 88.7912 | Bd Acc: 95.0625 | Cross Acc: 80.6216
 Eval:
Clean Acc: 80.9400 - Best: 81.2533 | Bd Acc: 95.0733 - Best: 97.7867 | Cross: 75.3267
Epoch 34:
 Train:
CE Loss: 0.0024 | Clean Acc: 88.9709 | Bd Acc: 95.3673 | Cross Acc: 80.0731
 Eval:
Clean Acc: 81.3133 - Best: 81.2533 | Bd Acc: 98.0467 - Best: 97.7867 | Cross: 74.9600
 Saving...
Epoch 35:
 Train:
CE Loss: 0.0023 | Clean Acc: 89.1409 | Bd Acc: 95.6111 | Cross Acc: 81.5357
 Eval:
Clean Acc: 81.3133 - Best: 81.3133 | Bd Acc: 96.2133 - Best: 98.0467 | Cross: 75.0200
Epoch 36:
 Train:
CE Loss: 0.0022 | Clean Acc: 89.7087 | Bd Acc: 96.2816 | Cross Acc: 81.9013
 Eval:
Clean Acc: 81.9400 - Best: 81.3133 | Bd Acc: 96.6333 - Best: 98.0467 | Cross: 76.0667
 Saving...
Epoch 37:
 Train:
CE Loss: 0.0021 | Clean Acc: 90.0841 | Bd Acc: 95.9768 | Cross Acc: 82.9982
 Eval:
Clean Acc: 81.9733 - Best: 81.9400 | Bd Acc: 95.5267 - Best: 96.6333 | Cross: 75.9867
 Saving...
Epoch 38:
 Train:
CE Loss: 0.0020 | Clean Acc: 90.4947 | Bd Acc: 96.2816 | Cross Acc: 82.8154
 Eval:
Clean Acc: 81.9200 - Best: 81.9733 | Bd Acc: 97.8933 - Best: 95.5267 | Cross: 76.4600
 Saving...
Epoch 39:
 Train:
CE Loss: 0.0021 | Clean Acc: 90.1322 | Bd Acc: 96.2511 | Cross Acc: 84.6435
 Eval:
Clean Acc: 81.3800 - Best: 81.9200 | Bd Acc: 96.8200 - Best: 97.8933 | Cross: 76.0867
Epoch 40:
 Train:
CE Loss: 0.0020 | Clean Acc: 90.6936 | Bd Acc: 96.2207 | Cross Acc: 85.9232
 Eval:
Clean Acc: 81.8933 - Best: 81.9200 | Bd Acc: 98.0600 - Best: 97.8933 | Cross: 78.2667
 Saving...
Epoch 41:
 Train:
CE Loss: 0.0020 | Clean Acc: 90.3696 | Bd Acc: 95.6416 | Cross Acc: 84.2779
 Eval:
Clean Acc: 82.5533 - Best: 81.8933 | Bd Acc: 98.5000 - Best: 98.0600 | Cross: 77.8467
 Saving...
Epoch 42:
 Train:
CE Loss: 0.0018 | Clean Acc: 91.3801 | Bd Acc: 96.3426 | Cross Acc: 82.8154
 Eval:
Clean Acc: 81.1800 - Best: 82.5533 | Bd Acc: 97.7600 - Best: 98.5000 | Cross: 75.3533
Epoch 43:
 Train:
CE Loss: 0.0019 | Clean Acc: 91.0208 | Bd Acc: 96.6169 | Cross Acc: 82.6325
 Eval:
Clean Acc: 81.6267 - Best: 82.5533 | Bd Acc: 95.0800 - Best: 98.5000 | Cross: 76.5400
Epoch 44:
 Train:
CE Loss: 0.0018 | Clean Acc: 91.6881 | Bd Acc: 96.1597 | Cross Acc: 83.1810
 Eval:
Clean Acc: 80.1333 - Best: 82.5533 | Bd Acc: 98.3267 - Best: 98.5000 | Cross: 74.6867
Epoch 45:
 Train:
CE Loss: 0.0019 | Clean Acc: 91.3063 | Bd Acc: 96.1597 | Cross Acc: 83.9123
 Eval:
Clean Acc: 82.0733 - Best: 82.5533 | Bd Acc: 95.8067 - Best: 98.5000 | Cross: 76.1467
Epoch 46:
 Train:
CE Loss: 0.0017 | Clean Acc: 92.1660 | Bd Acc: 96.8912 | Cross Acc: 84.2779
 Eval:
Clean Acc: 81.6400 - Best: 82.5533 | Bd Acc: 96.6400 - Best: 98.5000 | Cross: 75.8667
Epoch 47:
 Train:
CE Loss: 0.0018 | Clean Acc: 91.5180 | Bd Acc: 96.4645 | Cross Acc: 82.0841
 Eval:
Clean Acc: 81.6000 - Best: 82.5533 | Bd Acc: 98.6867 - Best: 98.5000 | Cross: 75.8467
Epoch 48:
 Train:
CE Loss: 0.0017 | Clean Acc: 91.8452 | Bd Acc: 96.4035 | Cross Acc: 83.3638
 Eval:
Clean Acc: 81.5733 - Best: 82.5533 | Bd Acc: 97.9800 - Best: 98.5000 | Cross: 77.4000
Epoch 49:
 Train:
CE Loss: 0.0017 | Clean Acc: 92.2944 | Bd Acc: 96.8302 | Cross Acc: 84.2779
 Eval:
Clean Acc: 82.4133 - Best: 82.5533 | Bd Acc: 98.1333 - Best: 98.5000 | Cross: 77.7867
Epoch 50:
 Train:
CE Loss: 0.0016 | Clean Acc: 92.3425 | Bd Acc: 96.8912 | Cross Acc: 84.2779
 Eval:
Clean Acc: 81.4533 - Best: 82.5533 | Bd Acc: 96.5467 - Best: 98.5000 | Cross: 76.3133
Epoch 51:
 Train:
CE Loss: 0.0016 | Clean Acc: 92.6569 | Bd Acc: 97.1045 | Cross Acc: 83.7294
 Eval:
Clean Acc: 80.6067 - Best: 82.5533 | Bd Acc: 97.6067 - Best: 98.5000 | Cross: 75.7533
Epoch 52:
 Train:
CE Loss: 0.0015 | Clean Acc: 92.9648 | Bd Acc: 97.2569 | Cross Acc: 86.2888
 Eval:
Clean Acc: 82.3800 - Best: 82.5533 | Bd Acc: 97.9467 - Best: 98.5000 | Cross: 77.2533
Epoch 53:
 Train:
CE Loss: 0.0016 | Clean Acc: 92.4163 | Bd Acc: 96.3731 | Cross Acc: 86.2888
 Eval:
Clean Acc: 82.0600 - Best: 82.5533 | Bd Acc: 97.1533 - Best: 98.5000 | Cross: 76.7267
Epoch 54:
 Train:
CE Loss: 0.0016 | Clean Acc: 92.6954 | Bd Acc: 96.4645 | Cross Acc: 83.1810
 Eval:
Clean Acc: 83.3267 - Best: 82.5533 | Bd Acc: 98.7000 - Best: 98.5000 | Cross: 79.0667
 Saving...
Epoch 55:
 Train:
CE Loss: 0.0015 | Clean Acc: 93.0547 | Bd Acc: 97.0741 | Cross Acc: 84.0951
 Eval:
Clean Acc: 80.8933 - Best: 83.3267 | Bd Acc: 98.5600 - Best: 98.7000 | Cross: 75.2867
Epoch 56:
 Train:
CE Loss: 0.0016 | Clean Acc: 92.6601 | Bd Acc: 96.9217 | Cross Acc: 84.6435
 Eval:
Clean Acc: 82.1533 - Best: 83.3267 | Bd Acc: 98.4200 - Best: 98.7000 | Cross: 78.1267
Epoch 57:
 Train:
CE Loss: 0.0016 | Clean Acc: 92.9103 | Bd Acc: 95.9768 | Cross Acc: 86.2888
 Eval:
Clean Acc: 82.1267 - Best: 83.3267 | Bd Acc: 98.4200 - Best: 98.7000 | Cross: 76.5133
Epoch 58:
 Train:
CE Loss: 0.0015 | Clean Acc: 93.1990 | Bd Acc: 97.6227 | Cross Acc: 86.4717
 Eval:
Clean Acc: 82.9600 - Best: 83.3267 | Bd Acc: 96.7533 - Best: 98.7000 | Cross: 78.1133
Epoch 59:
 Train:
CE Loss: 0.0014 | Clean Acc: 93.7957 | Bd Acc: 97.0436 | Cross Acc: 87.2029
 Eval:
Clean Acc: 82.7867 - Best: 83.3267 | Bd Acc: 98.1933 - Best: 98.7000 | Cross: 79.2000
Epoch 60:
 Train:
CE Loss: 0.0014 | Clean Acc: 93.5968 | Bd Acc: 97.1350 | Cross Acc: 87.0201
 Eval:
Clean Acc: 82.2600 - Best: 83.3267 | Bd Acc: 98.7200 - Best: 98.7000 | Cross: 77.2000
Epoch 61:
 Train:
CE Loss: 0.0014 | Clean Acc: 93.3947 | Bd Acc: 97.5312 | Cross Acc: 87.5686
 Eval:
Clean Acc: 82.7000 - Best: 83.3267 | Bd Acc: 97.7333 - Best: 98.7000 | Cross: 78.3200
Epoch 62:
 Train:
CE Loss: 0.0013 | Clean Acc: 93.9497 | Bd Acc: 97.4398 | Cross Acc: 85.9232
 Eval:
Clean Acc: 82.0733 - Best: 83.3267 | Bd Acc: 98.9200 - Best: 98.7000 | Cross: 77.4400
Epoch 63:
 Train:
CE Loss: 0.0014 | Clean Acc: 93.6610 | Bd Acc: 96.9521 | Cross Acc: 85.1920
 Eval:
Clean Acc: 82.4667 - Best: 83.3267 | Bd Acc: 98.6733 - Best: 98.7000 | Cross: 78.4867
Epoch 64:
 Train:
CE Loss: 0.0013 | Clean Acc: 94.2224 | Bd Acc: 97.3788 | Cross Acc: 85.1920
 Eval:
Clean Acc: 82.5933 - Best: 83.3267 | Bd Acc: 98.4000 - Best: 98.7000 | Cross: 77.9600
Epoch 65:
 Train:
CE Loss: 0.0014 | Clean Acc: 93.7765 | Bd Acc: 97.2569 | Cross Acc: 87.0201
 Eval:
Clean Acc: 82.6800 - Best: 83.3267 | Bd Acc: 97.5467 - Best: 98.7000 | Cross: 78.7467
Epoch 66:
 Train:
CE Loss: 0.0014 | Clean Acc: 93.7572 | Bd Acc: 97.1350 | Cross Acc: 84.2779
 Eval:
Clean Acc: 83.1067 - Best: 83.3267 | Bd Acc: 98.0667 - Best: 98.7000 | Cross: 78.3400
Epoch 67:
 Train:
CE Loss: 0.0014 | Clean Acc: 93.7380 | Bd Acc: 96.7998 | Cross Acc: 84.4607
 Eval:
Clean Acc: 82.6133 - Best: 83.3267 | Bd Acc: 98.5067 - Best: 98.7000 | Cross: 78.6933
Epoch 68:
 Train:
CE Loss: 0.0013 | Clean Acc: 93.8535 | Bd Acc: 97.5008 | Cross Acc: 86.4717
 Eval:
Clean Acc: 82.0133 - Best: 83.3267 | Bd Acc: 99.2600 - Best: 98.7000 | Cross: 77.4733
Epoch 69:
 Train:
CE Loss: 0.0013 | Clean Acc: 94.1454 | Bd Acc: 97.1045 | Cross Acc: 86.4717
 Eval:
Clean Acc: 82.4600 - Best: 83.3267 | Bd Acc: 98.2200 - Best: 98.7000 | Cross: 76.9800
Epoch 70:
 Train:
CE Loss: 0.0013 | Clean Acc: 94.0973 | Bd Acc: 97.3484 | Cross Acc: 87.5686
 Eval:
Clean Acc: 82.9400 - Best: 83.3267 | Bd Acc: 99.0067 - Best: 98.7000 | Cross: 77.4133
Epoch 71:
 Train:
CE Loss: 0.0012 | Clean Acc: 94.3732 | Bd Acc: 97.5008 | Cross Acc: 85.7404
 Eval:
Clean Acc: 83.1867 - Best: 83.3267 | Bd Acc: 99.4467 - Best: 98.7000 | Cross: 79.2133
Epoch 72:
 Train:
CE Loss: 0.0012 | Clean Acc: 94.4694 | Bd Acc: 97.4703 | Cross Acc: 86.6545
 Eval:
Clean Acc: 80.7200 - Best: 83.3267 | Bd Acc: 98.0267 - Best: 98.7000 | Cross: 76.1333
Epoch 73:
 Train:
CE Loss: 0.0012 | Clean Acc: 94.2448 | Bd Acc: 97.5008 | Cross Acc: 86.6545
 Eval:
Clean Acc: 82.9267 - Best: 83.3267 | Bd Acc: 98.0800 - Best: 98.7000 | Cross: 79.4400
Epoch 74:
 Train:
CE Loss: 0.0013 | Clean Acc: 93.9657 | Bd Acc: 97.4398 | Cross Acc: 87.2029
 Eval:
Clean Acc: 82.0267 - Best: 83.3267 | Bd Acc: 99.1133 - Best: 98.7000 | Cross: 76.3800
Epoch 75:
 Train:
CE Loss: 0.0011 | Clean Acc: 94.9025 | Bd Acc: 97.5312 | Cross Acc: 87.0201
 Eval:
Clean Acc: 83.1467 - Best: 83.3267 | Bd Acc: 98.5933 - Best: 98.7000 | Cross: 78.7933
Epoch 76:
 Train:
CE Loss: 0.0012 | Clean Acc: 94.4630 | Bd Acc: 97.3484 | Cross Acc: 89.7623
 Eval:
Clean Acc: 82.8133 - Best: 83.3267 | Bd Acc: 98.9400 - Best: 98.7000 | Cross: 78.2533
Epoch 77:
 Train:
CE Loss: 0.0013 | Clean Acc: 94.2224 | Bd Acc: 97.1350 | Cross Acc: 86.8373
 Eval:
Clean Acc: 83.2333 - Best: 83.3267 | Bd Acc: 98.1867 - Best: 98.7000 | Cross: 78.7600
Epoch 78:
 Train:
CE Loss: 0.0012 | Clean Acc: 94.2801 | Bd Acc: 97.5617 | Cross Acc: 86.6545
 Eval:
Clean Acc: 83.2867 - Best: 83.3267 | Bd Acc: 98.4333 - Best: 98.7000 | Cross: 79.3000
Epoch 79:
 Train:
CE Loss: 0.0012 | Clean Acc: 94.7389 | Bd Acc: 97.4703 | Cross Acc: 85.3748
 Eval:
Clean Acc: 82.6200 - Best: 83.3267 | Bd Acc: 98.4667 - Best: 98.7000 | Cross: 78.2133
Epoch 80:
 Train:
CE Loss: 0.0012 | Clean Acc: 94.7325 | Bd Acc: 97.5922 | Cross Acc: 87.2029
 Eval:
Clean Acc: 82.2133 - Best: 83.3267 | Bd Acc: 98.6267 - Best: 98.7000 | Cross: 77.4533
Epoch 81:
 Train:
CE Loss: 0.0012 | Clean Acc: 94.5207 | Bd Acc: 97.8360 | Cross Acc: 85.7404
 Eval:
Clean Acc: 82.2133 - Best: 83.3267 | Bd Acc: 98.9867 - Best: 98.7000 | Cross: 77.3667
Epoch 82:
 Train:
CE Loss: 0.0012 | Clean Acc: 94.7164 | Bd Acc: 98.0494 | Cross Acc: 89.5795
 Eval:
Clean Acc: 82.8200 - Best: 83.3267 | Bd Acc: 97.2133 - Best: 98.7000 | Cross: 77.7800
Epoch 83:
 Train:
CE Loss: 0.0012 | Clean Acc: 94.4213 | Bd Acc: 97.7751 | Cross Acc: 87.5686
 Eval:
Clean Acc: 83.1600 - Best: 83.3267 | Bd Acc: 99.2267 - Best: 98.7000 | Cross: 78.5000
Epoch 84:
 Train:
CE Loss: 0.0012 | Clean Acc: 94.6041 | Bd Acc: 97.8055 | Cross Acc: 88.6655
 Eval:
Clean Acc: 83.5733 - Best: 83.3267 | Bd Acc: 99.0067 - Best: 98.7000 | Cross: 79.3867
 Saving...
Epoch 85:
 Train:
CE Loss: 0.0011 | Clean Acc: 94.7453 | Bd Acc: 98.1103 | Cross Acc: 86.4717
 Eval:
Clean Acc: 83.4400 - Best: 83.5733 | Bd Acc: 98.1400 - Best: 99.0067 | Cross: 79.1600
Epoch 86:
 Train:
CE Loss: 0.0013 | Clean Acc: 94.2288 | Bd Acc: 97.3484 | Cross Acc: 86.2888
 Eval:
Clean Acc: 82.8333 - Best: 83.5733 | Bd Acc: 98.1400 - Best: 99.0067 | Cross: 78.1067
Epoch 87:
 Train:
CE Loss: 0.0011 | Clean Acc: 95.0918 | Bd Acc: 97.8665 | Cross Acc: 86.4717
 Eval:
Clean Acc: 82.0133 - Best: 83.5733 | Bd Acc: 99.2067 - Best: 99.0067 | Cross: 78.9467
Epoch 88:
 Train:
CE Loss: 0.0011 | Clean Acc: 94.9795 | Bd Acc: 97.9884 | Cross Acc: 89.2139
 Eval:
Clean Acc: 82.1000 - Best: 83.5733 | Bd Acc: 98.2267 - Best: 99.0067 | Cross: 77.6467
Epoch 89:
 Train:
CE Loss: 0.0012 | Clean Acc: 94.8127 | Bd Acc: 97.8360 | Cross Acc: 87.3857
 Eval:
Clean Acc: 83.3400 - Best: 83.5733 | Bd Acc: 98.2667 - Best: 99.0067 | Cross: 78.3533
Epoch 90:
 Train:
CE Loss: 0.0012 | Clean Acc: 94.6875 | Bd Acc: 97.6836 | Cross Acc: 87.7514
 Eval:
Clean Acc: 83.8400 - Best: 83.5733 | Bd Acc: 98.3067 - Best: 99.0067 | Cross: 79.7400
 Saving...
Epoch 91:
 Train:
CE Loss: 0.0012 | Clean Acc: 94.7260 | Bd Acc: 97.9579 | Cross Acc: 88.2998
 Eval:
Clean Acc: 83.3200 - Best: 83.8400 | Bd Acc: 98.1867 - Best: 98.3067 | Cross: 79.0867
Epoch 92:
 Train:
CE Loss: 0.0011 | Clean Acc: 94.7934 | Bd Acc: 97.4093 | Cross Acc: 87.9342
 Eval:
Clean Acc: 82.9333 - Best: 83.8400 | Bd Acc: 99.0000 - Best: 98.3067 | Cross: 78.0933
Epoch 93:
 Train:
CE Loss: 0.0011 | Clean Acc: 95.3452 | Bd Acc: 97.8970 | Cross Acc: 89.9452
 Eval:
Clean Acc: 83.3200 - Best: 83.8400 | Bd Acc: 98.0933 - Best: 98.3067 | Cross: 78.6533
Epoch 94:
 Train:
CE Loss: 0.0011 | Clean Acc: 95.0950 | Bd Acc: 97.9275 | Cross Acc: 88.6655
 Eval:
Clean Acc: 82.3200 - Best: 83.8400 | Bd Acc: 99.4933 - Best: 98.3067 | Cross: 78.2467
Epoch 95:
 Train:
CE Loss: 0.0011 | Clean Acc: 95.2939 | Bd Acc: 97.3484 | Cross Acc: 88.1170
 Eval:
Clean Acc: 83.4667 - Best: 83.8400 | Bd Acc: 96.3200 - Best: 98.3067 | Cross: 79.2067
Epoch 96:
 Train:
CE Loss: 0.0011 | Clean Acc: 94.9089 | Bd Acc: 97.8055 | Cross Acc: 87.7514
 Eval:
Clean Acc: 82.9400 - Best: 83.8400 | Bd Acc: 98.9800 - Best: 98.3067 | Cross: 79.1533
Epoch 97:
 Train:
CE Loss: 0.0011 | Clean Acc: 95.0629 | Bd Acc: 98.0798 | Cross Acc: 87.0201
 Eval:
Clean Acc: 84.0333 - Best: 83.8400 | Bd Acc: 99.6400 - Best: 98.3067 | Cross: 79.8533
 Saving...
Epoch 98:
 Train:
CE Loss: 0.0012 | Clean Acc: 94.8255 | Bd Acc: 97.8360 | Cross Acc: 84.8263
 Eval:
Clean Acc: 82.9133 - Best: 84.0333 | Bd Acc: 97.4400 - Best: 99.6400 | Cross: 77.8867
Epoch 99:
 Train:
CE Loss: 0.0012 | Clean Acc: 94.6458 | Bd Acc: 97.3484 | Cross Acc: 87.0201
 Eval:
Clean Acc: 82.8200 - Best: 84.0333 | Bd Acc: 99.2533 - Best: 99.6400 | Cross: 79.0000
Epoch 100:
 Train:
CE Loss: 0.0011 | Clean Acc: 95.2329 | Bd Acc: 97.8970 | Cross Acc: 87.2029
 Eval:
Clean Acc: 83.2600 - Best: 84.0333 | Bd Acc: 98.9867 - Best: 99.6400 | Cross: 78.9867
Epoch 101:
 Train:
CE Loss: 0.0006 | Clean Acc: 97.5747 | Bd Acc: 98.2627 | Cross Acc: 93.7843
 Eval:
Clean Acc: 86.5600 - Best: 84.0333 | Bd Acc: 99.2733 - Best: 99.6400 | Cross: 82.6733
 Saving...
Epoch 102:
 Train:
CE Loss: 0.0004 | Clean Acc: 98.6270 | Bd Acc: 99.0552 | Cross Acc: 95.0640
 Eval:
Clean Acc: 86.8400 - Best: 86.5600 | Bd Acc: 99.4800 - Best: 99.2733 | Cross: 83.1600
 Saving...
Epoch 103:
 Train:
CE Loss: 0.0003 | Clean Acc: 98.8964 | Bd Acc: 98.8723 | Cross Acc: 94.8812
 Eval:
Clean Acc: 86.8867 - Best: 86.8400 | Bd Acc: 99.1933 - Best: 99.4800 | Cross: 82.7667
 Saving...
Epoch 104:
 Train:
CE Loss: 0.0003 | Clean Acc: 99.0280 | Bd Acc: 99.0247 | Cross Acc: 94.1499
 Eval:
Clean Acc: 86.9733 - Best: 86.8867 | Bd Acc: 99.3933 - Best: 99.1933 | Cross: 83.0267
 Saving...
Epoch 105:
 Train:
CE Loss: 0.0003 | Clean Acc: 99.0697 | Bd Acc: 98.9637 | Cross Acc: 93.6015
 Eval:
Clean Acc: 86.9800 - Best: 86.9733 | Bd Acc: 99.4133 - Best: 99.3933 | Cross: 83.0867
 Saving...
Epoch 106:
 Train:
CE Loss: 0.0003 | Clean Acc: 99.1595 | Bd Acc: 99.2380 | Cross Acc: 96.1609
 Eval:
Clean Acc: 87.0800 - Best: 86.9800 | Bd Acc: 99.6533 - Best: 99.4133 | Cross: 83.0667
 Saving...
Epoch 107:
 Train:
CE Loss: 0.0003 | Clean Acc: 99.2044 | Bd Acc: 99.0552 | Cross Acc: 95.0640
 Eval:
Clean Acc: 87.1133 - Best: 87.0800 | Bd Acc: 99.1800 - Best: 99.6533 | Cross: 83.2867
 Saving...
Epoch 108:
 Train:
CE Loss: 0.0002 | Clean Acc: 99.2686 | Bd Acc: 99.1466 | Cross Acc: 95.9781
 Eval:
Clean Acc: 87.0667 - Best: 87.1133 | Bd Acc: 99.6067 - Best: 99.1800 | Cross: 83.3067
 Saving...
Epoch 109:
 Train:
CE Loss: 0.0002 | Clean Acc: 99.2814 | Bd Acc: 99.0247 | Cross Acc: 95.0640
 Eval:
Clean Acc: 86.9467 - Best: 87.0667 | Bd Acc: 99.6467 - Best: 99.6067 | Cross: 82.9267
Epoch 110:
 Train:
CE Loss: 0.0002 | Clean Acc: 99.4193 | Bd Acc: 99.3904 | Cross Acc: 95.2468
 Eval:
Clean Acc: 87.0667 - Best: 87.0667 | Bd Acc: 99.5267 - Best: 99.6067 | Cross: 83.7400
Epoch 111:
 Train:
CE Loss: 0.0002 | Clean Acc: 99.4418 | Bd Acc: 99.2685 | Cross Acc: 95.0640
 Eval:
Clean Acc: 87.0533 - Best: 87.0667 | Bd Acc: 99.8067 - Best: 99.6067 | Cross: 83.6600
 Saving...
Epoch 112:
 Train:
CE Loss: 0.0002 | Clean Acc: 99.4578 | Bd Acc: 99.2990 | Cross Acc: 94.5155
 Eval:
Clean Acc: 87.0267 - Best: 87.0533 | Bd Acc: 99.5400 - Best: 99.8067 | Cross: 83.5467
Epoch 113:
 Train:
CE Loss: 0.0002 | Clean Acc: 99.4546 | Bd Acc: 99.5428 | Cross Acc: 95.7952
 Eval:
Clean Acc: 87.1467 - Best: 87.0533 | Bd Acc: 99.6600 - Best: 99.8067 | Cross: 83.5067
 Saving...
Epoch 114:
 Train:
CE Loss: 0.0002 | Clean Acc: 99.4546 | Bd Acc: 99.2990 | Cross Acc: 95.4296
 Eval:
Clean Acc: 87.2200 - Best: 87.1467 | Bd Acc: 99.6467 - Best: 99.6600 | Cross: 83.4800
 Saving...
Epoch 115:
 Train:
CE Loss: 0.0002 | Clean Acc: 99.4578 | Bd Acc: 99.4514 | Cross Acc: 95.6124
 Eval:
Clean Acc: 87.2733 - Best: 87.2200 | Bd Acc: 99.5867 - Best: 99.6467 | Cross: 83.5867
 Saving...
Epoch 116:
 Train:
CE Loss: 0.0002 | Clean Acc: 99.4001 | Bd Acc: 99.0856 | Cross Acc: 94.6984
 Eval:
Clean Acc: 87.0800 - Best: 87.2733 | Bd Acc: 99.6667 - Best: 99.5867 | Cross: 83.2733
Epoch 117:
 Train:
CE Loss: 0.0002 | Clean Acc: 99.5124 | Bd Acc: 99.2076 | Cross Acc: 96.3437
 Eval:
Clean Acc: 87.2600 - Best: 87.2733 | Bd Acc: 99.5867 - Best: 99.5867 | Cross: 83.6067
Epoch 118:
 Train:
CE Loss: 0.0002 | Clean Acc: 99.6247 | Bd Acc: 99.2685 | Cross Acc: 96.8921
 Eval:
Clean Acc: 87.1200 - Best: 87.2733 | Bd Acc: 99.6733 - Best: 99.5867 | Cross: 83.4600
Epoch 119:
 Train:
CE Loss: 0.0002 | Clean Acc: 99.5316 | Bd Acc: 99.2380 | Cross Acc: 96.5265
 Eval:
Clean Acc: 87.2600 - Best: 87.2733 | Bd Acc: 99.5667 - Best: 99.5867 | Cross: 83.6867
Epoch 120:
 Train:
CE Loss: 0.0002 | Clean Acc: 99.5477 | Bd Acc: 99.4514 | Cross Acc: 94.8812
 Eval:
Clean Acc: 87.1933 - Best: 87.2733 | Bd Acc: 99.8467 - Best: 99.5867 | Cross: 83.6600
 Saving...
Epoch 121:
 Train:
CE Loss: 0.0002 | Clean Acc: 99.5862 | Bd Acc: 99.1466 | Cross Acc: 94.8812
 Eval:
Clean Acc: 87.2333 - Best: 87.1933 | Bd Acc: 99.7533 - Best: 99.8467 | Cross: 83.4200
 Saving...
Epoch 122:
 Train:
CE Loss: 0.0002 | Clean Acc: 99.5092 | Bd Acc: 99.2990 | Cross Acc: 96.5265
 Eval:
Clean Acc: 87.3400 - Best: 87.2333 | Bd Acc: 99.6933 - Best: 99.7533 | Cross: 83.8333
 Saving...
Epoch 123:
 Train:
CE Loss: 0.0002 | Clean Acc: 99.6182 | Bd Acc: 99.4819 | Cross Acc: 95.4296
 Eval:
Clean Acc: 87.3333 - Best: 87.3400 | Bd Acc: 99.6533 - Best: 99.6933 | Cross: 83.4133
Epoch 124:
 Train:
CE Loss: 0.0002 | Clean Acc: 99.5188 | Bd Acc: 99.4514 | Cross Acc: 95.9781
 Eval:
Clean Acc: 87.2533 - Best: 87.3400 | Bd Acc: 99.4600 - Best: 99.6933 | Cross: 83.7333
Epoch 125:
 Train:
CE Loss: 0.0001 | Clean Acc: 99.6054 | Bd Acc: 99.4514 | Cross Acc: 95.7952
 Eval:
Clean Acc: 87.3267 - Best: 87.3400 | Bd Acc: 99.5467 - Best: 99.6933 | Cross: 83.2533
Epoch 126:
 Train:
CE Loss: 0.0001 | Clean Acc: 99.6696 | Bd Acc: 99.5428 | Cross Acc: 94.8812
 Eval:
Clean Acc: 87.1200 - Best: 87.3400 | Bd Acc: 99.7200 - Best: 99.6933 | Cross: 83.6200
Epoch 127:
 Train:
CE Loss: 0.0001 | Clean Acc: 99.6279 | Bd Acc: 99.2685 | Cross Acc: 95.7952
 Eval:
Clean Acc: 87.3000 - Best: 87.3400 | Bd Acc: 99.7600 - Best: 99.6933 | Cross: 83.6933
 Saving...
Epoch 128:
 Train:
CE Loss: 0.0001 | Clean Acc: 99.5958 | Bd Acc: 99.2076 | Cross Acc: 96.3437
 Eval:
Clean Acc: 87.1667 - Best: 87.3000 | Bd Acc: 99.5933 - Best: 99.7600 | Cross: 83.5600
Epoch 129:
 Train:
CE Loss: 0.0001 | Clean Acc: 99.6792 | Bd Acc: 99.3599 | Cross Acc: 96.7093
 Eval:
Clean Acc: 87.1333 - Best: 87.3000 | Bd Acc: 99.5733 - Best: 99.7600 | Cross: 83.8200
Epoch 130:
 Train:
CE Loss: 0.0001 | Clean Acc: 99.6503 | Bd Acc: 99.4819 | Cross Acc: 96.7093
 Eval:
Clean Acc: 87.0600 - Best: 87.3000 | Bd Acc: 99.6333 - Best: 99.7600 | Cross: 83.7267
Epoch 131:
 Train:
CE Loss: 0.0001 | Clean Acc: 99.6567 | Bd Acc: 99.4819 | Cross Acc: 96.7093
 Eval:
Clean Acc: 87.1467 - Best: 87.3000 | Bd Acc: 99.6067 - Best: 99.7600 | Cross: 83.7733
Epoch 132:
 Train:
CE Loss: 0.0001 | Clean Acc: 99.6824 | Bd Acc: 99.3295 | Cross Acc: 95.4296
 Eval:
Clean Acc: 87.3133 - Best: 87.3000 | Bd Acc: 99.7400 - Best: 99.7600 | Cross: 83.7667
 Saving...
Epoch 133:
 Train:
CE Loss: 0.0001 | Clean Acc: 99.6600 | Bd Acc: 99.6343 | Cross Acc: 95.0640
 Eval:
Clean Acc: 87.1667 - Best: 87.3133 | Bd Acc: 99.6600 - Best: 99.7400 | Cross: 83.9533
Epoch 134:
 Train:
CE Loss: 0.0001 | Clean Acc: 99.6984 | Bd Acc: 99.1771 | Cross Acc: 94.5155
 Eval:
Clean Acc: 87.3467 - Best: 87.3133 | Bd Acc: 99.8200 - Best: 99.7400 | Cross: 83.7133
 Saving...
Epoch 135:
 Train:
CE Loss: 0.0001 | Clean Acc: 99.6920 | Bd Acc: 99.6038 | Cross Acc: 95.0640
 Eval:
Clean Acc: 87.3267 - Best: 87.3467 | Bd Acc: 99.7533 - Best: 99.8200 | Cross: 83.5133
Epoch 136:
 Train:
CE Loss: 0.0001 | Clean Acc: 99.6279 | Bd Acc: 99.3599 | Cross Acc: 95.6124
 Eval:
Clean Acc: 87.2267 - Best: 87.3467 | Bd Acc: 99.6667 - Best: 99.8200 | Cross: 83.8200
Epoch 137:
 Train:
CE Loss: 0.0001 | Clean Acc: 99.7081 | Bd Acc: 99.5733 | Cross Acc: 95.9781
 Eval:
Clean Acc: 87.4267 - Best: 87.3467 | Bd Acc: 99.6600 - Best: 99.8200 | Cross: 84.2067
 Saving...
Epoch 138:
 Train:
CE Loss: 0.0001 | Clean Acc: 99.6792 | Bd Acc: 99.5428 | Cross Acc: 96.8921
 Eval:
Clean Acc: 87.2200 - Best: 87.4267 | Bd Acc: 99.6200 - Best: 99.6600 | Cross: 83.6200
Epoch 139:
 Train:
CE Loss: 0.0001 | Clean Acc: 99.6632 | Bd Acc: 99.3904 | Cross Acc: 95.7952
 Eval:
Clean Acc: 87.1533 - Best: 87.4267 | Bd Acc: 99.7667 - Best: 99.6600 | Cross: 83.8333
Epoch 140:
 Train:
CE Loss: 0.0001 | Clean Acc: 99.7305 | Bd Acc: 99.4514 | Cross Acc: 97.4406
 Eval:
Clean Acc: 87.2600 - Best: 87.4267 | Bd Acc: 99.8667 - Best: 99.6600 | Cross: 83.9400
Epoch 141:
 Train:
CE Loss: 0.0001 | Clean Acc: 99.7049 | Bd Acc: 99.3904 | Cross Acc: 96.3437
 Eval:
Clean Acc: 87.0867 - Best: 87.4267 | Bd Acc: 99.7200 - Best: 99.6600 | Cross: 83.6067
Epoch 142:
 Train:
CE Loss: 0.0001 | Clean Acc: 99.6728 | Bd Acc: 99.4209 | Cross Acc: 96.7093
 Eval:
Clean Acc: 87.2000 - Best: 87.4267 | Bd Acc: 99.5733 - Best: 99.6600 | Cross: 83.8800
Epoch 143:
 Train:
CE Loss: 0.0001 | Clean Acc: 99.7081 | Bd Acc: 99.4514 | Cross Acc: 97.0750
 Eval:
Clean Acc: 87.3800 - Best: 87.4267 | Bd Acc: 99.5933 - Best: 99.6600 | Cross: 83.7067
Epoch 144:
 Train:
CE Loss: 0.0001 | Clean Acc: 99.7305 | Bd Acc: 99.4209 | Cross Acc: 97.2578
 Eval:
Clean Acc: 87.2733 - Best: 87.4267 | Bd Acc: 99.5267 - Best: 99.6600 | Cross: 83.9667
Epoch 145:
 Train:
CE Loss: 0.0001 | Clean Acc: 99.7626 | Bd Acc: 99.6038 | Cross Acc: 96.5265
 Eval:
Clean Acc: 87.1600 - Best: 87.4267 | Bd Acc: 99.7267 - Best: 99.6600 | Cross: 83.6867
Epoch 146:
 Train:
CE Loss: 0.0001 | Clean Acc: 99.7402 | Bd Acc: 99.3904 | Cross Acc: 95.2468
 Eval:
Clean Acc: 87.2067 - Best: 87.4267 | Bd Acc: 99.7867 - Best: 99.6600 | Cross: 83.9667
Epoch 147:
 Train:
CE Loss: 0.0001 | Clean Acc: 99.7337 | Bd Acc: 99.5428 | Cross Acc: 97.8062
 Eval:
Clean Acc: 87.1200 - Best: 87.4267 | Bd Acc: 99.6200 - Best: 99.6600 | Cross: 83.5267
Epoch 148:
 Train:
CE Loss: 0.0001 | Clean Acc: 99.7145 | Bd Acc: 99.6343 | Cross Acc: 97.6234
 Eval:
Clean Acc: 87.2733 - Best: 87.4267 | Bd Acc: 99.7200 - Best: 99.6600 | Cross: 83.8133
Epoch 149:
 Train:
CE Loss: 0.0001 | Clean Acc: 99.7113 | Bd Acc: 99.3599 | Cross Acc: 97.0750
 Eval:
Clean Acc: 87.1200 - Best: 87.4267 | Bd Acc: 99.8067 - Best: 99.6600 | Cross: 83.7733
Epoch 150:
 Train:
CE Loss: 0.0001 | Clean Acc: 99.7017 | Bd Acc: 99.6038 | Cross Acc: 97.2578
 Eval:
Clean Acc: 87.2067 - Best: 87.4267 | Bd Acc: 99.6333 - Best: 99.6600 | Cross: 83.6133
Epoch 151:
 Train:
CE Loss: 0.0001 | Clean Acc: 99.7273 | Bd Acc: 99.5123 | Cross Acc: 96.1609
 Eval:
Clean Acc: 87.1467 - Best: 87.4267 | Bd Acc: 99.7400 - Best: 99.6600 | Cross: 83.8200
Epoch 152:
 Train:
CE Loss: 0.0001 | Clean Acc: 99.7690 | Bd Acc: 99.4514 | Cross Acc: 96.5265
 Eval:
Clean Acc: 87.0600 - Best: 87.4267 | Bd Acc: 99.7133 - Best: 99.6600 | Cross: 83.6933
Epoch 153:
 Train:
CE Loss: 0.0001 | Clean Acc: 99.7177 | Bd Acc: 99.6038 | Cross Acc: 96.7093
 Eval:
Clean Acc: 87.2400 - Best: 87.4267 | Bd Acc: 99.6733 - Best: 99.6600 | Cross: 83.6667
Epoch 154:
 Train:
CE Loss: 0.0001 | Clean Acc: 99.7177 | Bd Acc: 99.4209 | Cross Acc: 97.0750
 Eval:
Clean Acc: 87.0667 - Best: 87.4267 | Bd Acc: 99.6667 - Best: 99.6600 | Cross: 83.7800
Epoch 155:
 Train:
CE Loss: 0.0001 | Clean Acc: 99.7177 | Bd Acc: 99.4514 | Cross Acc: 96.3437
 Eval:
Clean Acc: 86.9867 - Best: 87.4267 | Bd Acc: 99.6933 - Best: 99.6600 | Cross: 84.0133
Epoch 156:
 Train:
CE Loss: 0.0001 | Clean Acc: 99.7434 | Bd Acc: 99.5733 | Cross Acc: 93.7843
 Eval:
Clean Acc: 86.9133 - Best: 87.4267 | Bd Acc: 99.7400 - Best: 99.6600 | Cross: 83.6600
Epoch 157:
 Train:
CE Loss: 0.0001 | Clean Acc: 99.7658 | Bd Acc: 99.5123 | Cross Acc: 97.4406
 Eval:
Clean Acc: 87.0333 - Best: 87.4267 | Bd Acc: 99.7867 - Best: 99.6600 | Cross: 83.5800
Epoch 158:
 Train:
CE Loss: 0.0001 | Clean Acc: 99.7915 | Bd Acc: 99.7257 | Cross Acc: 97.0750
 Eval:
Clean Acc: 87.1067 - Best: 87.4267 | Bd Acc: 99.7267 - Best: 99.6600 | Cross: 84.0800
Epoch 159:
 Train:
CE Loss: 0.0001 | Clean Acc: 99.7947 | Bd Acc: 99.3904 | Cross Acc: 97.4406
 Eval:
Clean Acc: 87.3800 - Best: 87.4267 | Bd Acc: 99.7400 - Best: 99.6600 | Cross: 84.0467
 Saving...
Epoch 160:
 Train:
CE Loss: 0.0001 | Clean Acc: 99.7819 | Bd Acc: 99.6343 | Cross Acc: 97.6234
 Eval:
Clean Acc: 87.4000 - Best: 87.3800 | Bd Acc: 99.7600 - Best: 99.7400 | Cross: 83.9467
 Saving...
Epoch 161:
 Train:
CE Loss: 0.0001 | Clean Acc: 99.7690 | Bd Acc: 99.6647 | Cross Acc: 97.8062
 Eval:
Clean Acc: 87.3267 - Best: 87.4000 | Bd Acc: 99.6867 - Best: 99.7600 | Cross: 83.8467
Epoch 162:
 Train:
CE Loss: 0.0001 | Clean Acc: 99.7947 | Bd Acc: 99.4819 | Cross Acc: 97.8062
 Eval:
Clean Acc: 87.1733 - Best: 87.4000 | Bd Acc: 99.7067 - Best: 99.7600 | Cross: 84.1467
Epoch 163:
 Train:
CE Loss: 0.0001 | Clean Acc: 99.8075 | Bd Acc: 99.6952 | Cross Acc: 97.0750
 Eval:
Clean Acc: 87.4533 - Best: 87.4000 | Bd Acc: 99.7533 - Best: 99.7600 | Cross: 83.8000
 Saving...
Epoch 164:
 Train:
CE Loss: 0.0001 | Clean Acc: 99.7819 | Bd Acc: 99.6952 | Cross Acc: 96.1609
 Eval:
Clean Acc: 87.4000 - Best: 87.4533 | Bd Acc: 99.6867 - Best: 99.7533 | Cross: 84.0333
Epoch 165:
 Train:
CE Loss: 0.0001 | Clean Acc: 99.8011 | Bd Acc: 99.6343 | Cross Acc: 96.5265
 Eval:
Clean Acc: 87.3000 - Best: 87.4533 | Bd Acc: 99.6867 - Best: 99.7533 | Cross: 84.0933
Epoch 166:
 Train:
CE Loss: 0.0001 | Clean Acc: 99.7305 | Bd Acc: 99.2990 | Cross Acc: 97.4406
 Eval:
Clean Acc: 87.3667 - Best: 87.4533 | Bd Acc: 99.7200 - Best: 99.7533 | Cross: 83.6667
Epoch 167:
 Train:
CE Loss: 0.0001 | Clean Acc: 99.7851 | Bd Acc: 99.4514 | Cross Acc: 97.2578
 Eval:
Clean Acc: 87.5133 - Best: 87.4533 | Bd Acc: 99.8600 - Best: 99.7533 | Cross: 84.0200
 Saving...
Epoch 168:
 Train:
CE Loss: 0.0001 | Clean Acc: 99.7658 | Bd Acc: 99.7867 | Cross Acc: 95.9781
 Eval:
Clean Acc: 87.1800 - Best: 87.5133 | Bd Acc: 99.6400 - Best: 99.8600 | Cross: 83.7200
Epoch 169:
 Train:
CE Loss: 0.0001 | Clean Acc: 99.8268 | Bd Acc: 99.6647 | Cross Acc: 97.6234
 Eval:
Clean Acc: 87.1000 - Best: 87.5133 | Bd Acc: 99.7533 - Best: 99.8600 | Cross: 83.9000
Epoch 170:
 Train:
CE Loss: 0.0001 | Clean Acc: 99.8364 | Bd Acc: 99.5123 | Cross Acc: 97.6234
 Eval:
Clean Acc: 87.3067 - Best: 87.5133 | Bd Acc: 99.8867 - Best: 99.8600 | Cross: 84.0133
Epoch 171:
 Train:
CE Loss: 0.0001 | Clean Acc: 99.7915 | Bd Acc: 99.6647 | Cross Acc: 96.7093
 Eval:
Clean Acc: 87.3267 - Best: 87.5133 | Bd Acc: 99.6600 - Best: 99.8600 | Cross: 84.1800
Epoch 172:
 Train:
CE Loss: 0.0001 | Clean Acc: 99.7626 | Bd Acc: 99.6343 | Cross Acc: 96.1609
 Eval:
Clean Acc: 87.1733 - Best: 87.5133 | Bd Acc: 99.6867 - Best: 99.8600 | Cross: 83.8400
Epoch 173:
 Train:
CE Loss: 0.0001 | Clean Acc: 99.7979 | Bd Acc: 99.6343 | Cross Acc: 97.2578
 Eval:
Clean Acc: 87.3800 - Best: 87.5133 | Bd Acc: 99.7067 - Best: 99.8600 | Cross: 84.1533
Epoch 174:
 Train:
CE Loss: 0.0001 | Clean Acc: 99.7690 | Bd Acc: 99.5123 | Cross Acc: 97.9890
 Eval:
Clean Acc: 87.5333 - Best: 87.5133 | Bd Acc: 99.8933 - Best: 99.8600 | Cross: 84.2933
 Saving...
Epoch 175:
 Train:
CE Loss: 0.0001 | Clean Acc: 99.7498 | Bd Acc: 99.6343 | Cross Acc: 97.8062
 Eval:
Clean Acc: 87.2200 - Best: 87.5333 | Bd Acc: 99.7400 - Best: 99.8933 | Cross: 84.4733
Epoch 176:
 Train:
CE Loss: 0.0001 | Clean Acc: 99.7851 | Bd Acc: 99.3295 | Cross Acc: 97.0750
 Eval:
Clean Acc: 87.1867 - Best: 87.5333 | Bd Acc: 99.8200 - Best: 99.8933 | Cross: 84.1867
Epoch 177:
 Train:
CE Loss: 0.0001 | Clean Acc: 99.7722 | Bd Acc: 99.4819 | Cross Acc: 96.7093
 Eval:
Clean Acc: 87.2733 - Best: 87.5333 | Bd Acc: 99.8200 - Best: 99.8933 | Cross: 83.9133
Epoch 178:
 Train:
CE Loss: 0.0001 | Clean Acc: 99.7530 | Bd Acc: 99.7257 | Cross Acc: 97.6234
 Eval:
Clean Acc: 87.1533 - Best: 87.5333 | Bd Acc: 99.7600 - Best: 99.8933 | Cross: 83.8533
Epoch 179:
 Train:
CE Loss: 0.0001 | Clean Acc: 99.8011 | Bd Acc: 99.6952 | Cross Acc: 94.6984
 Eval:
Clean Acc: 87.3333 - Best: 87.5333 | Bd Acc: 99.7400 - Best: 99.8933 | Cross: 83.8733
Epoch 180:
 Train:
CE Loss: 0.0001 | Clean Acc: 99.7466 | Bd Acc: 99.2685 | Cross Acc: 97.0750
 Eval:
Clean Acc: 87.3067 - Best: 87.5333 | Bd Acc: 99.7133 - Best: 99.8933 | Cross: 84.0600
Epoch 181:
 Train:
CE Loss: 0.0001 | Clean Acc: 99.7915 | Bd Acc: 99.5733 | Cross Acc: 97.2578
 Eval:
Clean Acc: 87.3733 - Best: 87.5333 | Bd Acc: 99.7200 - Best: 99.8933 | Cross: 84.1933
Epoch 182:
 Train:
CE Loss: 0.0001 | Clean Acc: 99.7498 | Bd Acc: 99.6647 | Cross Acc: 96.8921
 Eval:
Clean Acc: 87.1933 - Best: 87.5333 | Bd Acc: 99.7667 - Best: 99.8933 | Cross: 84.1733
Epoch 183:
 Train:
CE Loss: 0.0001 | Clean Acc: 99.7690 | Bd Acc: 99.4819 | Cross Acc: 98.1719
 Eval:
Clean Acc: 87.2733 - Best: 87.5333 | Bd Acc: 99.6600 - Best: 99.8933 | Cross: 83.8267
Epoch 184:
 Train:
CE Loss: 0.0001 | Clean Acc: 99.7819 | Bd Acc: 99.4514 | Cross Acc: 96.5265
 Eval:
Clean Acc: 87.3467 - Best: 87.5333 | Bd Acc: 99.7133 - Best: 99.8933 | Cross: 84.0467
Epoch 185:
 Train:
CE Loss: 0.0001 | Clean Acc: 99.7658 | Bd Acc: 99.4514 | Cross Acc: 96.1609
 Eval:
Clean Acc: 87.2733 - Best: 87.5333 | Bd Acc: 99.7467 - Best: 99.8933 | Cross: 84.1067
Epoch 186:
 Train:
CE Loss: 0.0001 | Clean Acc: 99.7979 | Bd Acc: 99.6952 | Cross Acc: 96.5265
 Eval:
Clean Acc: 87.2400 - Best: 87.5333 | Bd Acc: 99.7667 - Best: 99.8933 | Cross: 84.1400
Epoch 187:
 Train:
CE Loss: 0.0001 | Clean Acc: 99.8011 | Bd Acc: 99.4514 | Cross Acc: 96.8921
 Eval:
Clean Acc: 87.2733 - Best: 87.5333 | Bd Acc: 99.6000 - Best: 99.8933 | Cross: 84.2200
Epoch 188:
 Train:
CE Loss: 0.0001 | Clean Acc: 99.8300 | Bd Acc: 99.5733 | Cross Acc: 97.4406
 Eval:
Clean Acc: 87.2733 - Best: 87.5333 | Bd Acc: 99.8133 - Best: 99.8933 | Cross: 84.1067
Epoch 189:
 Train:
CE Loss: 0.0001 | Clean Acc: 99.7915 | Bd Acc: 99.6038 | Cross Acc: 97.4406
 Eval:
Clean Acc: 87.1533 - Best: 87.5333 | Bd Acc: 99.7933 - Best: 99.8933 | Cross: 84.0600
Epoch 190:
 Train:
CE Loss: 0.0001 | Clean Acc: 99.8043 | Bd Acc: 99.5733 | Cross Acc: 97.0750
 Eval:
Clean Acc: 87.3600 - Best: 87.5333 | Bd Acc: 99.7467 - Best: 99.8933 | Cross: 84.2467
Epoch 191:
 Train:
CE Loss: 0.0001 | Clean Acc: 99.7754 | Bd Acc: 99.8476 | Cross Acc: 97.2578
 Eval:
Clean Acc: 87.5400 - Best: 87.5333 | Bd Acc: 99.7067 - Best: 99.8933 | Cross: 84.1800
 Saving...
Epoch 192:
 Train:
CE Loss: 0.0001 | Clean Acc: 99.8492 | Bd Acc: 99.5733 | Cross Acc: 98.5375
 Eval:
Clean Acc: 87.3333 - Best: 87.5400 | Bd Acc: 99.7400 - Best: 99.7067 | Cross: 83.9333
Epoch 193:
 Train:
CE Loss: 0.0001 | Clean Acc: 99.8300 | Bd Acc: 99.5733 | Cross Acc: 95.9781
 Eval:
Clean Acc: 87.3867 - Best: 87.5400 | Bd Acc: 99.7400 - Best: 99.7067 | Cross: 84.1333
Epoch 194:
 Train:
CE Loss: 0.0001 | Clean Acc: 99.7819 | Bd Acc: 99.5123 | Cross Acc: 97.8062
 Eval:
Clean Acc: 87.4000 - Best: 87.5400 | Bd Acc: 99.9000 - Best: 99.7067 | Cross: 84.3933
Epoch 195:
 Train:
CE Loss: 0.0001 | Clean Acc: 99.8107 | Bd Acc: 99.7257 | Cross Acc: 96.8921
 Eval:
Clean Acc: 87.3467 - Best: 87.5400 | Bd Acc: 99.8733 - Best: 99.7067 | Cross: 84.1600
Epoch 196:
 Train:
CE Loss: 0.0001 | Clean Acc: 99.8043 | Bd Acc: 99.5428 | Cross Acc: 96.5265
 Eval:
Clean Acc: 87.3733 - Best: 87.5400 | Bd Acc: 99.8067 - Best: 99.7067 | Cross: 84.0600
Epoch 197:
 Train:
CE Loss: 0.0001 | Clean Acc: 99.7947 | Bd Acc: 99.2990 | Cross Acc: 97.4406
 Eval:
Clean Acc: 87.2400 - Best: 87.5400 | Bd Acc: 99.7933 - Best: 99.7067 | Cross: 83.9933
Epoch 198:
 Train:
CE Loss: 0.0001 | Clean Acc: 99.8204 | Bd Acc: 99.6038 | Cross Acc: 97.4406
 Eval:
Clean Acc: 87.3667 - Best: 87.5400 | Bd Acc: 99.7000 - Best: 99.7067 | Cross: 84.0800
Epoch 199:
 Train:
CE Loss: 0.0001 | Clean Acc: 99.8524 | Bd Acc: 99.7257 | Cross Acc: 97.9890
 Eval:
Clean Acc: 87.2467 - Best: 87.5400 | Bd Acc: 99.7800 - Best: 99.7067 | Cross: 83.8267
Epoch 200:
 Train:
CE Loss: 0.0001 | Clean Acc: 99.7819 | Bd Acc: 99.7257 | Cross Acc: 97.0750
 Eval:
Clean Acc: 87.3267 - Best: 87.5400 | Bd Acc: 99.6067 - Best: 99.7067 | Cross: 84.3067
Epoch 201:
 Train:
CE Loss: 0.0001 | Clean Acc: 99.8813 | Bd Acc: 99.5733 | Cross Acc: 98.3547
 Eval:
Clean Acc: 87.2667 - Best: 87.5400 | Bd Acc: 99.6267 - Best: 99.7067 | Cross: 83.9733
Epoch 202:
 Train:
CE Loss: 0.0001 | Clean Acc: 99.8749 | Bd Acc: 99.6952 | Cross Acc: 97.6234
 Eval:
Clean Acc: 87.3333 - Best: 87.5400 | Bd Acc: 99.6400 - Best: 99.7067 | Cross: 84.0000
Epoch 203:
 Train:
CE Loss: 0.0001 | Clean Acc: 99.8043 | Bd Acc: 99.6647 | Cross Acc: 95.7952
 Eval:
Clean Acc: 87.5133 - Best: 87.5400 | Bd Acc: 99.7200 - Best: 99.7067 | Cross: 84.1667
 Saving...
Epoch 204:
 Train:
CE Loss: 0.0001 | Clean Acc: 99.8653 | Bd Acc: 99.5123 | Cross Acc: 97.6234
 Eval:
Clean Acc: 87.4467 - Best: 87.5133 | Bd Acc: 99.7600 - Best: 99.7200 | Cross: 84.5067
 Saving...
Epoch 205:
 Train:
CE Loss: 0.0001 | Clean Acc: 99.8524 | Bd Acc: 99.5428 | Cross Acc: 96.7093
 Eval:
Clean Acc: 87.5267 - Best: 87.4467 | Bd Acc: 99.8533 - Best: 99.7600 | Cross: 84.3400
 Saving...
Epoch 206:
 Train:
CE Loss: 0.0001 | Clean Acc: 99.8268 | Bd Acc: 99.4209 | Cross Acc: 98.1719
 Eval:
Clean Acc: 87.4733 - Best: 87.5267 | Bd Acc: 99.8067 - Best: 99.8533 | Cross: 84.1600
Epoch 207:
 Train:
CE Loss: 0.0001 | Clean Acc: 99.8332 | Bd Acc: 99.5733 | Cross Acc: 97.2578
 Eval:
Clean Acc: 87.4133 - Best: 87.5267 | Bd Acc: 99.6800 - Best: 99.8533 | Cross: 84.3467
Epoch 208:
 Train:
CE Loss: 0.0001 | Clean Acc: 99.8685 | Bd Acc: 99.6038 | Cross Acc: 97.9890
 Eval:
Clean Acc: 87.5333 - Best: 87.5267 | Bd Acc: 99.7133 - Best: 99.8533 | Cross: 84.2533
 Saving...
Epoch 209:
 Train:
CE Loss: 0.0001 | Clean Acc: 99.8492 | Bd Acc: 99.5428 | Cross Acc: 98.3547
 Eval:
Clean Acc: 87.4867 - Best: 87.5333 | Bd Acc: 99.7933 - Best: 99.7133 | Cross: 84.4400
 Saving...
Epoch 210:
 Train:
CE Loss: 0.0001 | Clean Acc: 99.8011 | Bd Acc: 99.5123 | Cross Acc: 96.1609
 Eval:
Clean Acc: 87.4133 - Best: 87.4867 | Bd Acc: 99.7400 - Best: 99.7933 | Cross: 84.5600
Epoch 211:
 Train:
CE Loss: 0.0001 | Clean Acc: 99.7819 | Bd Acc: 99.5733 | Cross Acc: 96.8921
 Eval:
Clean Acc: 87.5133 - Best: 87.4867 | Bd Acc: 99.7933 - Best: 99.7933 | Cross: 84.2000
 Saving...
Epoch 212:
 Train:
CE Loss: 0.0001 | Clean Acc: 99.8396 | Bd Acc: 99.6952 | Cross Acc: 96.8921
 Eval:
Clean Acc: 87.3333 - Best: 87.5133 | Bd Acc: 99.6600 - Best: 99.7933 | Cross: 84.0333
Epoch 213:
 Train:
CE Loss: 0.0001 | Clean Acc: 99.8268 | Bd Acc: 99.7867 | Cross Acc: 96.8921
 Eval:
Clean Acc: 87.5933 - Best: 87.5133 | Bd Acc: 99.7800 - Best: 99.7933 | Cross: 84.1133
 Saving...
Epoch 214:
 Train:
CE Loss: 0.0001 | Clean Acc: 99.8621 | Bd Acc: 99.7867 | Cross Acc: 97.6234
 Eval:
Clean Acc: 87.4267 - Best: 87.5933 | Bd Acc: 99.6533 - Best: 99.7800 | Cross: 84.0200
Epoch 215:
 Train:
CE Loss: 0.0001 | Clean Acc: 99.8749 | Bd Acc: 99.8476 | Cross Acc: 98.7203
 Eval:
Clean Acc: 87.4133 - Best: 87.5933 | Bd Acc: 99.8400 - Best: 99.7800 | Cross: 83.9333
Epoch 216:
 Train:
CE Loss: 0.0001 | Clean Acc: 99.8813 | Bd Acc: 99.5733 | Cross Acc: 97.2578
 Eval:
Clean Acc: 87.4733 - Best: 87.5933 | Bd Acc: 99.8333 - Best: 99.7800 | Cross: 84.4933
Epoch 217:
 Train:
CE Loss: 0.0001 | Clean Acc: 99.8556 | Bd Acc: 99.5733 | Cross Acc: 97.4406
 Eval:
Clean Acc: 87.5733 - Best: 87.5933 | Bd Acc: 99.7467 - Best: 99.7800 | Cross: 84.3267
Epoch 218:
 Train:
CE Loss: 0.0001 | Clean Acc: 99.8588 | Bd Acc: 99.4819 | Cross Acc: 96.8921
 Eval:
Clean Acc: 87.4800 - Best: 87.5933 | Bd Acc: 99.7600 - Best: 99.7800 | Cross: 84.1800
Epoch 219:
 Train:
CE Loss: 0.0001 | Clean Acc: 99.8621 | Bd Acc: 99.7562 | Cross Acc: 97.9890
 Eval:
Clean Acc: 87.5000 - Best: 87.5933 | Bd Acc: 99.7933 - Best: 99.7800 | Cross: 84.0933
 Saving...
Epoch 220:
 Train:
CE Loss: 0.0001 | Clean Acc: 99.8236 | Bd Acc: 99.6647 | Cross Acc: 97.4406
 Eval:
Clean Acc: 87.2667 - Best: 87.5000 | Bd Acc: 99.7467 - Best: 99.7933 | Cross: 84.2867
Epoch 221:
 Train:
CE Loss: 0.0001 | Clean Acc: 99.8717 | Bd Acc: 99.6952 | Cross Acc: 97.4406
 Eval:
Clean Acc: 87.4267 - Best: 87.5000 | Bd Acc: 99.6667 - Best: 99.7933 | Cross: 84.1333
Epoch 222:
 Train:
CE Loss: 0.0001 | Clean Acc: 99.8492 | Bd Acc: 99.7257 | Cross Acc: 97.8062
 Eval:
Clean Acc: 87.4333 - Best: 87.5000 | Bd Acc: 99.6733 - Best: 99.7933 | Cross: 84.2000
Epoch 223:
 Train:
CE Loss: 0.0001 | Clean Acc: 99.8621 | Bd Acc: 99.5428 | Cross Acc: 97.8062
 Eval:
Clean Acc: 87.4800 - Best: 87.5000 | Bd Acc: 99.7867 - Best: 99.7933 | Cross: 84.3733
Epoch 224:
 Train:
CE Loss: 0.0001 | Clean Acc: 99.8524 | Bd Acc: 99.7257 | Cross Acc: 96.7093
 Eval:
Clean Acc: 87.4067 - Best: 87.5000 | Bd Acc: 99.7933 - Best: 99.7933 | Cross: 84.0133
Epoch 225:
 Train:
CE Loss: 0.0001 | Clean Acc: 99.8460 | Bd Acc: 99.7562 | Cross Acc: 97.8062
 Eval:
Clean Acc: 87.6533 - Best: 87.5000 | Bd Acc: 99.8600 - Best: 99.7933 | Cross: 84.3467
 Saving...
Epoch 226:
 Train:
CE Loss: 0.0001 | Clean Acc: 99.8556 | Bd Acc: 99.5123 | Cross Acc: 97.8062
 Eval:
Clean Acc: 87.3867 - Best: 87.6533 | Bd Acc: 99.7867 - Best: 99.8600 | Cross: 84.3533
Epoch 227:
 Train:
CE Loss: 0.0001 | Clean Acc: 99.8749 | Bd Acc: 99.6343 | Cross Acc: 97.8062
 Eval:
Clean Acc: 87.5133 - Best: 87.6533 | Bd Acc: 99.8933 - Best: 99.8600 | Cross: 84.3067
Epoch 228:
 Train:
CE Loss: 0.0001 | Clean Acc: 99.8236 | Bd Acc: 99.6343 | Cross Acc: 97.6234
 Eval:
Clean Acc: 87.3800 - Best: 87.6533 | Bd Acc: 99.7800 - Best: 99.8600 | Cross: 84.1000
Epoch 229:
 Train:
CE Loss: 0.0001 | Clean Acc: 99.8973 | Bd Acc: 99.6952 | Cross Acc: 97.6234
 Eval:
Clean Acc: 87.5133 - Best: 87.6533 | Bd Acc: 99.7667 - Best: 99.8600 | Cross: 84.0933
Epoch 230:
 Train:
CE Loss: 0.0001 | Clean Acc: 99.8268 | Bd Acc: 99.6038 | Cross Acc: 97.8062
 Eval:
Clean Acc: 87.4000 - Best: 87.6533 | Bd Acc: 99.8067 - Best: 99.8600 | Cross: 84.3667
Epoch 231:
 Train:
CE Loss: 0.0001 | Clean Acc: 99.8364 | Bd Acc: 99.3599 | Cross Acc: 97.2578
 Eval:
Clean Acc: 87.4867 - Best: 87.6533 | Bd Acc: 99.8000 - Best: 99.8600 | Cross: 84.4267
Epoch 232:
 Train:
CE Loss: 0.0001 | Clean Acc: 99.9102 | Bd Acc: 99.6647 | Cross Acc: 97.2578
 Eval:
Clean Acc: 87.3467 - Best: 87.6533 | Bd Acc: 99.8667 - Best: 99.8600 | Cross: 84.2133
Epoch 233:
 Train:
CE Loss: 0.0001 | Clean Acc: 99.8941 | Bd Acc: 99.7562 | Cross Acc: 97.9890
 Eval:
Clean Acc: 87.3867 - Best: 87.6533 | Bd Acc: 99.7533 - Best: 99.8600 | Cross: 83.9733
Epoch 234:
 Train:
CE Loss: 0.0001 | Clean Acc: 99.8845 | Bd Acc: 99.6038 | Cross Acc: 97.0750
 Eval:
Clean Acc: 87.4800 - Best: 87.6533 | Bd Acc: 99.8667 - Best: 99.8600 | Cross: 84.3600
Epoch 235:
 Train:
CE Loss: 0.0001 | Clean Acc: 99.8524 | Bd Acc: 99.6952 | Cross Acc: 97.2578
 Eval:
Clean Acc: 87.5333 - Best: 87.6533 | Bd Acc: 99.8267 - Best: 99.8600 | Cross: 84.2067
Epoch 236:
 Train:
CE Loss: 0.0001 | Clean Acc: 99.8749 | Bd Acc: 99.6038 | Cross Acc: 97.2578
 Eval:
Clean Acc: 87.4467 - Best: 87.6533 | Bd Acc: 99.7933 - Best: 99.8600 | Cross: 84.2200
Epoch 237:
 Train:
CE Loss: 0.0001 | Clean Acc: 99.8107 | Bd Acc: 99.7562 | Cross Acc: 98.7203
 Eval:
Clean Acc: 87.4933 - Best: 87.6533 | Bd Acc: 99.7067 - Best: 99.8600 | Cross: 84.2267
Epoch 238:
 Train:
CE Loss: 0.0001 | Clean Acc: 99.8685 | Bd Acc: 99.7562 | Cross Acc: 98.1719
 Eval:
Clean Acc: 87.4733 - Best: 87.6533 | Bd Acc: 99.7067 - Best: 99.8600 | Cross: 84.4933
Epoch 239:
 Train:
CE Loss: 0.0001 | Clean Acc: 99.8845 | Bd Acc: 99.7257 | Cross Acc: 97.9890
 Eval:
Clean Acc: 87.5133 - Best: 87.6533 | Bd Acc: 99.7600 - Best: 99.8600 | Cross: 84.5067
Epoch 240:
 Train:
CE Loss: 0.0001 | Clean Acc: 99.8621 | Bd Acc: 99.7562 | Cross Acc: 97.8062
 Eval:
Clean Acc: 87.4267 - Best: 87.6533 | Bd Acc: 99.7733 - Best: 99.8600 | Cross: 84.2267
Epoch 241:
 Train:
CE Loss: 0.0001 | Clean Acc: 99.8781 | Bd Acc: 99.6952 | Cross Acc: 96.8921
 Eval:
Clean Acc: 87.5867 - Best: 87.6533 | Bd Acc: 99.8333 - Best: 99.8600 | Cross: 84.3067
Epoch 242:
 Train:
CE Loss: 0.0001 | Clean Acc: 99.8396 | Bd Acc: 99.7867 | Cross Acc: 97.0750
 Eval:
Clean Acc: 87.5467 - Best: 87.6533 | Bd Acc: 99.7933 - Best: 99.8600 | Cross: 84.3133
Epoch 243:
 Train:
CE Loss: 0.0001 | Clean Acc: 99.8621 | Bd Acc: 99.6343 | Cross Acc: 97.6234
 Eval:
Clean Acc: 87.4133 - Best: 87.6533 | Bd Acc: 99.5400 - Best: 99.8600 | Cross: 84.1667
Epoch 244:
 Train:
CE Loss: 0.0001 | Clean Acc: 99.8941 | Bd Acc: 99.4819 | Cross Acc: 97.8062
 Eval:
Clean Acc: 87.5267 - Best: 87.6533 | Bd Acc: 99.8400 - Best: 99.8600 | Cross: 84.2467
Epoch 245:
 Train:
CE Loss: 0.0001 | Clean Acc: 99.8653 | Bd Acc: 99.7867 | Cross Acc: 99.0859
 Eval:
Clean Acc: 87.4933 - Best: 87.6533 | Bd Acc: 99.6600 - Best: 99.8600 | Cross: 84.4000
Epoch 246:
 Train:
CE Loss: 0.0001 | Clean Acc: 99.8621 | Bd Acc: 99.8476 | Cross Acc: 98.9031
 Eval:
Clean Acc: 87.6000 - Best: 87.6533 | Bd Acc: 99.6733 - Best: 99.8600 | Cross: 84.3333
Epoch 247:
 Train:
CE Loss: 0.0001 | Clean Acc: 99.8685 | Bd Acc: 99.6952 | Cross Acc: 97.6234
 Eval:
Clean Acc: 87.6067 - Best: 87.6533 | Bd Acc: 99.7133 - Best: 99.8600 | Cross: 84.3000
Epoch 248:
 Train:
CE Loss: 0.0001 | Clean Acc: 99.8749 | Bd Acc: 99.6952 | Cross Acc: 96.7093
 Eval:
Clean Acc: 87.4800 - Best: 87.6533 | Bd Acc: 99.7733 - Best: 99.8600 | Cross: 84.3000
Epoch 249:
 Train:
CE Loss: 0.0001 | Clean Acc: 99.8492 | Bd Acc: 99.5733 | Cross Acc: 95.9781
 Eval:
Clean Acc: 87.4800 - Best: 87.6533 | Bd Acc: 99.5600 - Best: 99.8600 | Cross: 84.1867
Epoch 250:
 Train:
CE Loss: 0.0001 | Clean Acc: 99.8877 | Bd Acc: 99.6038 | Cross Acc: 98.1719
 Eval:
Clean Acc: 87.6533 - Best: 87.6533 | Bd Acc: 99.7733 - Best: 99.8600 | Cross: 84.1267
Epoch 251:
 Train:
CE Loss: 0.0001 | Clean Acc: 99.8813 | Bd Acc: 99.8171 | Cross Acc: 97.6234
 Eval:
Clean Acc: 87.5333 - Best: 87.6533 | Bd Acc: 99.8467 - Best: 99.8600 | Cross: 84.4467
Epoch 252:
 Train:
CE Loss: 0.0001 | Clean Acc: 99.8364 | Bd Acc: 99.7562 | Cross Acc: 97.8062
 Eval:
Clean Acc: 87.5200 - Best: 87.6533 | Bd Acc: 99.6400 - Best: 99.8600 | Cross: 84.2533
Epoch 253:
 Train:
CE Loss: 0.0001 | Clean Acc: 99.8909 | Bd Acc: 99.6343 | Cross Acc: 97.8062
 Eval:
Clean Acc: 87.4667 - Best: 87.6533 | Bd Acc: 99.8267 - Best: 99.8600 | Cross: 84.4867
Epoch 254:
 Train:
CE Loss: 0.0001 | Clean Acc: 99.8749 | Bd Acc: 99.8171 | Cross Acc: 97.4406
 Eval:
Clean Acc: 87.5867 - Best: 87.6533 | Bd Acc: 99.8600 - Best: 99.8600 | Cross: 84.0733
Epoch 255:
 Train:
CE Loss: 0.0001 | Clean Acc: 99.8300 | Bd Acc: 99.8476 | Cross Acc: 97.6234
 Eval:
Clean Acc: 87.6600 - Best: 87.6533 | Bd Acc: 99.8133 - Best: 99.8600 | Cross: 84.4333
 Saving...
Epoch 256:
 Train:
CE Loss: 0.0001 | Clean Acc: 99.8909 | Bd Acc: 99.6038 | Cross Acc: 98.5375
 Eval:
Clean Acc: 87.5600 - Best: 87.6600 | Bd Acc: 99.7600 - Best: 99.8133 | Cross: 84.3467
Epoch 257:
 Train:
CE Loss: 0.0001 | Clean Acc: 99.8749 | Bd Acc: 99.7562 | Cross Acc: 97.9890
 Eval:
Clean Acc: 87.5933 - Best: 87.6600 | Bd Acc: 99.8267 - Best: 99.8133 | Cross: 84.3600
 Saving...
Epoch 258:
 Train:
CE Loss: 0.0001 | Clean Acc: 99.8524 | Bd Acc: 99.6038 | Cross Acc: 96.8921
 Eval:
Clean Acc: 87.5800 - Best: 87.5933 | Bd Acc: 99.7867 - Best: 99.8267 | Cross: 84.8400
Epoch 259:
 Train:
CE Loss: 0.0001 | Clean Acc: 99.8236 | Bd Acc: 99.7562 | Cross Acc: 97.6234
 Eval:
Clean Acc: 87.5533 - Best: 87.5933 | Bd Acc: 99.6867 - Best: 99.8267 | Cross: 84.1933
Epoch 260:
 Train:
CE Loss: 0.0001 | Clean Acc: 99.8588 | Bd Acc: 99.5428 | Cross Acc: 96.8921
 Eval:
Clean Acc: 87.6600 - Best: 87.5933 | Bd Acc: 99.8267 - Best: 99.8267 | Cross: 84.3333
 Saving...
Epoch 261:
 Train:
CE Loss: 0.0001 | Clean Acc: 99.8685 | Bd Acc: 99.7867 | Cross Acc: 98.1719
 Eval:
Clean Acc: 87.6400 - Best: 87.6600 | Bd Acc: 99.8133 - Best: 99.8267 | Cross: 84.4000
Epoch 262:
 Train:
CE Loss: 0.0001 | Clean Acc: 99.8685 | Bd Acc: 99.7867 | Cross Acc: 97.2578
 Eval:
Clean Acc: 87.5267 - Best: 87.6600 | Bd Acc: 99.8600 - Best: 99.8267 | Cross: 84.3067
Epoch 263:
 Train:
CE Loss: 0.0001 | Clean Acc: 99.8556 | Bd Acc: 99.7562 | Cross Acc: 96.7093
 Eval:
Clean Acc: 87.5733 - Best: 87.6600 | Bd Acc: 99.8600 - Best: 99.8267 | Cross: 84.2467
 Saving...
Epoch 264:
 Train:
CE Loss: 0.0001 | Clean Acc: 99.8909 | Bd Acc: 99.7867 | Cross Acc: 99.0859
 Eval:
Clean Acc: 87.5600 - Best: 87.5733 | Bd Acc: 99.8000 - Best: 99.8600 | Cross: 84.3000
Epoch 265:
 Train:
CE Loss: 0.0001 | Clean Acc: 99.8973 | Bd Acc: 99.7867 | Cross Acc: 96.8921
 Eval:
Clean Acc: 87.4200 - Best: 87.5733 | Bd Acc: 99.7733 - Best: 99.8600 | Cross: 84.3533
Epoch 266:
 Train:
CE Loss: 0.0001 | Clean Acc: 99.8877 | Bd Acc: 99.6038 | Cross Acc: 97.2578
 Eval:
Clean Acc: 87.4867 - Best: 87.5733 | Bd Acc: 99.6933 - Best: 99.8600 | Cross: 84.5533
Epoch 267:
 Train:
CE Loss: 0.0001 | Clean Acc: 99.8332 | Bd Acc: 99.6952 | Cross Acc: 97.9890
 Eval:
Clean Acc: 87.5667 - Best: 87.5733 | Bd Acc: 99.7467 - Best: 99.8600 | Cross: 84.2800
Epoch 268:
 Train:
CE Loss: 0.0001 | Clean Acc: 99.8428 | Bd Acc: 99.6647 | Cross Acc: 97.0750
 Eval:
Clean Acc: 87.4667 - Best: 87.5733 | Bd Acc: 99.8333 - Best: 99.8600 | Cross: 84.5733
Epoch 269:
 Train:
CE Loss: 0.0001 | Clean Acc: 99.8685 | Bd Acc: 99.6343 | Cross Acc: 97.6234
 Eval:
Clean Acc: 87.3933 - Best: 87.5733 | Bd Acc: 99.8333 - Best: 99.8600 | Cross: 84.1133
Epoch 270:
 Train:
CE Loss: 0.0001 | Clean Acc: 99.8941 | Bd Acc: 99.8171 | Cross Acc: 98.7203
 Eval:
Clean Acc: 87.3933 - Best: 87.5733 | Bd Acc: 99.7933 - Best: 99.8600 | Cross: 84.5400
Epoch 271:
 Train:
CE Loss: 0.0001 | Clean Acc: 99.8396 | Bd Acc: 99.6952 | Cross Acc: 98.1719
 Eval:
Clean Acc: 87.4533 - Best: 87.5733 | Bd Acc: 99.7067 - Best: 99.8600 | Cross: 84.6467
Epoch 272:
 Train:
CE Loss: 0.0001 | Clean Acc: 99.8492 | Bd Acc: 99.5733 | Cross Acc: 97.6234
 Eval:
Clean Acc: 87.4867 - Best: 87.5733 | Bd Acc: 99.7000 - Best: 99.8600 | Cross: 84.4600
Epoch 273:
 Train:
CE Loss: 0.0001 | Clean Acc: 99.8941 | Bd Acc: 99.7257 | Cross Acc: 98.5375
 Eval:
Clean Acc: 87.6333 - Best: 87.5733 | Bd Acc: 99.8200 - Best: 99.8600 | Cross: 84.0333
 Saving...
Epoch 274:
 Train:
CE Loss: 0.0001 | Clean Acc: 99.8332 | Bd Acc: 99.6952 | Cross Acc: 97.9890
 Eval:
Clean Acc: 87.4667 - Best: 87.6333 | Bd Acc: 99.8533 - Best: 99.8200 | Cross: 84.2933
Epoch 275:
 Train:
CE Loss: 0.0001 | Clean Acc: 99.8749 | Bd Acc: 99.7867 | Cross Acc: 97.2578
 Eval:
Clean Acc: 87.3533 - Best: 87.6333 | Bd Acc: 99.7533 - Best: 99.8200 | Cross: 84.2600
Epoch 276:
 Train:
CE Loss: 0.0001 | Clean Acc: 99.8171 | Bd Acc: 99.6952 | Cross Acc: 97.2578
 Eval:
Clean Acc: 87.3267 - Best: 87.6333 | Bd Acc: 99.6867 - Best: 99.8200 | Cross: 84.3333
Epoch 277:
 Train:
CE Loss: 0.0001 | Clean Acc: 99.8877 | Bd Acc: 99.7562 | Cross Acc: 98.1719
 Eval:
Clean Acc: 87.3867 - Best: 87.6333 | Bd Acc: 99.7733 - Best: 99.8200 | Cross: 84.3467
Epoch 278:
 Train:
CE Loss: 0.0001 | Clean Acc: 99.8909 | Bd Acc: 99.4819 | Cross Acc: 97.6234
 Eval:
Clean Acc: 87.5400 - Best: 87.6333 | Bd Acc: 99.7800 - Best: 99.8200 | Cross: 84.8533
Epoch 279:
 Train:
CE Loss: 0.0001 | Clean Acc: 99.9070 | Bd Acc: 99.6647 | Cross Acc: 97.2578
 Eval:
Clean Acc: 87.4867 - Best: 87.6333 | Bd Acc: 99.8267 - Best: 99.8200 | Cross: 84.1400
Epoch 280:
 Train:
CE Loss: 0.0001 | Clean Acc: 99.8492 | Bd Acc: 99.5428 | Cross Acc: 96.7093
 Eval:
Clean Acc: 87.4400 - Best: 87.6333 | Bd Acc: 99.7267 - Best: 99.8200 | Cross: 84.3133
Epoch 281:
 Train:
CE Loss: 0.0001 | Clean Acc: 99.8396 | Bd Acc: 99.6038 | Cross Acc: 97.6234
 Eval:
Clean Acc: 87.4733 - Best: 87.6333 | Bd Acc: 99.8333 - Best: 99.8200 | Cross: 84.4400
Epoch 282:
 Train:
CE Loss: 0.0001 | Clean Acc: 99.8300 | Bd Acc: 99.6647 | Cross Acc: 97.2578
 Eval:
Clean Acc: 87.3933 - Best: 87.6333 | Bd Acc: 99.7533 - Best: 99.8200 | Cross: 84.4267
Epoch 283:
 Train:
CE Loss: 0.0001 | Clean Acc: 99.8524 | Bd Acc: 99.6038 | Cross Acc: 97.0750
 Eval:
Clean Acc: 87.4800 - Best: 87.6333 | Bd Acc: 99.7533 - Best: 99.8200 | Cross: 84.1400
Epoch 284:
 Train:
CE Loss: 0.0001 | Clean Acc: 99.8941 | Bd Acc: 99.6952 | Cross Acc: 96.3437
 Eval:
Clean Acc: 87.5067 - Best: 87.6333 | Bd Acc: 99.7533 - Best: 99.8200 | Cross: 84.0733
Epoch 285:
 Train:
CE Loss: 0.0001 | Clean Acc: 99.9006 | Bd Acc: 99.6038 | Cross Acc: 97.2578
 Eval:
Clean Acc: 87.4800 - Best: 87.6333 | Bd Acc: 99.7933 - Best: 99.8200 | Cross: 84.1000
Epoch 286:
 Train:
CE Loss: 0.0001 | Clean Acc: 99.9070 | Bd Acc: 99.7562 | Cross Acc: 96.8921
 Eval:
Clean Acc: 87.4067 - Best: 87.6333 | Bd Acc: 99.6600 - Best: 99.8200 | Cross: 84.3000
Epoch 287:
 Train:
CE Loss: 0.0001 | Clean Acc: 99.8524 | Bd Acc: 99.7257 | Cross Acc: 97.4406
 Eval:
Clean Acc: 87.4133 - Best: 87.6333 | Bd Acc: 99.8067 - Best: 99.8200 | Cross: 84.4133
Epoch 288:
 Train:
CE Loss: 0.0001 | Clean Acc: 99.8749 | Bd Acc: 99.6343 | Cross Acc: 97.2578
 Eval:
Clean Acc: 87.4800 - Best: 87.6333 | Bd Acc: 99.7333 - Best: 99.8200 | Cross: 84.4267
Epoch 289:
 Train:
CE Loss: 0.0001 | Clean Acc: 99.8749 | Bd Acc: 99.6038 | Cross Acc: 96.7093
 Eval:
Clean Acc: 87.3600 - Best: 87.6333 | Bd Acc: 99.7067 - Best: 99.8200 | Cross: 84.4933
Epoch 290:
 Train:
CE Loss: 0.0001 | Clean Acc: 99.8588 | Bd Acc: 99.6343 | Cross Acc: 98.7203
 Eval:
Clean Acc: 87.5133 - Best: 87.6333 | Bd Acc: 99.8067 - Best: 99.8200 | Cross: 84.3000
Epoch 291:
 Train:
CE Loss: 0.0001 | Clean Acc: 99.8653 | Bd Acc: 99.6038 | Cross Acc: 97.9890
 Eval:
Clean Acc: 87.5400 - Best: 87.6333 | Bd Acc: 99.7533 - Best: 99.8200 | Cross: 84.2800
Epoch 292:
 Train:
CE Loss: 0.0001 | Clean Acc: 99.8877 | Bd Acc: 99.6038 | Cross Acc: 97.8062
 Eval:
Clean Acc: 87.5267 - Best: 87.6333 | Bd Acc: 99.7333 - Best: 99.8200 | Cross: 84.3467
Epoch 293:
 Train:
CE Loss: 0.0001 | Clean Acc: 99.8524 | Bd Acc: 99.6343 | Cross Acc: 96.5265
 Eval:
Clean Acc: 87.6067 - Best: 87.6333 | Bd Acc: 99.8067 - Best: 99.8200 | Cross: 84.3000
Epoch 294:
 Train:
CE Loss: 0.0001 | Clean Acc: 99.8460 | Bd Acc: 99.7257 | Cross Acc: 97.4406
 Eval:
Clean Acc: 87.5867 - Best: 87.6333 | Bd Acc: 99.8533 - Best: 99.8200 | Cross: 84.3133
 Saving...
Epoch 295:
 Train:
CE Loss: 0.0001 | Clean Acc: 99.9102 | Bd Acc: 99.7562 | Cross Acc: 97.2578
 Eval:
Clean Acc: 87.6133 - Best: 87.5867 | Bd Acc: 99.8533 - Best: 99.8533 | Cross: 84.4333
 Saving...
Epoch 296:
 Train:
CE Loss: 0.0001 | Clean Acc: 99.8877 | Bd Acc: 99.8476 | Cross Acc: 97.0750
 Eval:
Clean Acc: 87.6267 - Best: 87.6133 | Bd Acc: 99.7200 - Best: 99.8533 | Cross: 84.6933
 Saving...
Epoch 297:
 Train:
CE Loss: 0.0001 | Clean Acc: 99.8556 | Bd Acc: 99.5123 | Cross Acc: 97.6234
 Eval:
Clean Acc: 87.4133 - Best: 87.6267 | Bd Acc: 99.6667 - Best: 99.7200 | Cross: 84.6800
Epoch 298:
 Train:
CE Loss: 0.0001 | Clean Acc: 99.8845 | Bd Acc: 99.8781 | Cross Acc: 97.0750
 Eval:
Clean Acc: 87.4267 - Best: 87.6267 | Bd Acc: 99.6600 - Best: 99.7200 | Cross: 84.3733
Epoch 299:
 Train:
CE Loss: 0.0001 | Clean Acc: 99.8171 | Bd Acc: 99.6038 | Cross Acc: 97.6234
 Eval:
Clean Acc: 87.5200 - Best: 87.6267 | Bd Acc: 99.7267 - Best: 99.7200 | Cross: 84.0600
Epoch 300:
 Train:
CE Loss: 0.0001 | Clean Acc: 99.8300 | Bd Acc: 99.7562 | Cross Acc: 97.9890
 Eval:
Clean Acc: 87.5200 - Best: 87.6267 | Bd Acc: 99.7867 - Best: 99.7200 | Cross: 84.4000
Epoch 301:
 Train:
CE Loss: 0.0001 | Clean Acc: 99.9134 | Bd Acc: 99.6952 | Cross Acc: 96.7093
 Eval:
Clean Acc: 87.5867 - Best: 87.6267 | Bd Acc: 99.7800 - Best: 99.7200 | Cross: 84.3600
 Saving...
Epoch 302:
 Train:
CE Loss: 0.0001 | Clean Acc: 99.8524 | Bd Acc: 99.6647 | Cross Acc: 97.6234
 Eval:
Clean Acc: 87.5867 - Best: 87.5867 | Bd Acc: 99.8133 - Best: 99.7800 | Cross: 84.4733
 Saving...
Epoch 303:
 Train:
CE Loss: 0.0001 | Clean Acc: 99.9006 | Bd Acc: 99.7257 | Cross Acc: 98.1719
 Eval:
Clean Acc: 87.5933 - Best: 87.5867 | Bd Acc: 99.7800 - Best: 99.8133 | Cross: 84.3000
 Saving...
Epoch 304:
 Train:
CE Loss: 0.0001 | Clean Acc: 99.8781 | Bd Acc: 99.3295 | Cross Acc: 98.1719
 Eval:
Clean Acc: 87.4800 - Best: 87.5933 | Bd Acc: 99.7067 - Best: 99.7800 | Cross: 84.4400
Epoch 305:
 Train:
CE Loss: 0.0001 | Clean Acc: 99.8524 | Bd Acc: 99.7257 | Cross Acc: 97.9890
 Eval:
Clean Acc: 87.5600 - Best: 87.5933 | Bd Acc: 99.8200 - Best: 99.7800 | Cross: 84.2000
 Saving...
Epoch 306:
 Train:
CE Loss: 0.0001 | Clean Acc: 99.8877 | Bd Acc: 99.5733 | Cross Acc: 95.9781
 Eval:
Clean Acc: 87.5867 - Best: 87.5600 | Bd Acc: 99.7200 - Best: 99.8200 | Cross: 84.4400
 Saving...
Epoch 307:
 Train:
CE Loss: 0.0001 | Clean Acc: 99.8588 | Bd Acc: 99.5733 | Cross Acc: 97.9890
 Eval:
Clean Acc: 87.4733 - Best: 87.5867 | Bd Acc: 99.5867 - Best: 99.7200 | Cross: 84.7400
Epoch 308:
 Train:
CE Loss: 0.0001 | Clean Acc: 99.8621 | Bd Acc: 99.6038 | Cross Acc: 96.7093
 Eval:
Clean Acc: 87.4400 - Best: 87.5867 | Bd Acc: 99.8133 - Best: 99.7200 | Cross: 84.1867
Epoch 309:
 Train:
CE Loss: 0.0001 | Clean Acc: 99.8396 | Bd Acc: 99.6952 | Cross Acc: 97.4406
 Eval:
Clean Acc: 87.4600 - Best: 87.5867 | Bd Acc: 99.6333 - Best: 99.7200 | Cross: 84.3600
Epoch 310:
 Train:
CE Loss: 0.0001 | Clean Acc: 99.8845 | Bd Acc: 99.7562 | Cross Acc: 96.7093
 Eval:
Clean Acc: 87.5533 - Best: 87.5867 | Bd Acc: 99.8267 - Best: 99.7200 | Cross: 84.5000
 Saving...
Epoch 311:
 Train:
CE Loss: 0.0001 | Clean Acc: 99.8973 | Bd Acc: 99.7562 | Cross Acc: 98.3547
 Eval:
Clean Acc: 87.5533 - Best: 87.5533 | Bd Acc: 99.8200 - Best: 99.8267 | Cross: 84.4533
Epoch 312:
 Train:
CE Loss: 0.0001 | Clean Acc: 99.8685 | Bd Acc: 99.6952 | Cross Acc: 97.6234
 Eval:
Clean Acc: 87.5000 - Best: 87.5533 | Bd Acc: 99.6533 - Best: 99.8267 | Cross: 84.1067
Epoch 313:
 Train:
CE Loss: 0.0001 | Clean Acc: 99.9070 | Bd Acc: 99.7562 | Cross Acc: 98.1719
 Eval:
Clean Acc: 87.4933 - Best: 87.5533 | Bd Acc: 99.8267 - Best: 99.8267 | Cross: 84.3133
Epoch 314:
 Train:
CE Loss: 0.0001 | Clean Acc: 99.8973 | Bd Acc: 99.5733 | Cross Acc: 98.7203
 Eval:
Clean Acc: 87.5467 - Best: 87.5533 | Bd Acc: 99.6800 - Best: 99.8267 | Cross: 84.2733
Epoch 315:
 Train:
CE Loss: 0.0001 | Clean Acc: 99.8813 | Bd Acc: 99.6647 | Cross Acc: 95.6124
 Eval:
Clean Acc: 87.5600 - Best: 87.5533 | Bd Acc: 99.6733 - Best: 99.8267 | Cross: 84.5600
 Saving...
Epoch 316:
 Train:
CE Loss: 0.0001 | Clean Acc: 99.8717 | Bd Acc: 99.7867 | Cross Acc: 97.8062
 Eval:
Clean Acc: 87.4933 - Best: 87.5600 | Bd Acc: 99.7067 - Best: 99.6733 | Cross: 84.3667
 Saving...
Epoch 317:
 Train:
CE Loss: 0.0001 | Clean Acc: 99.8941 | Bd Acc: 99.8781 | Cross Acc: 97.8062
 Eval:
Clean Acc: 87.4667 - Best: 87.4933 | Bd Acc: 99.7933 - Best: 99.7067 | Cross: 84.2200
 Saving...
Epoch 318:
 Train:
CE Loss: 0.0001 | Clean Acc: 99.9070 | Bd Acc: 99.6647 | Cross Acc: 97.8062
 Eval:
Clean Acc: 87.4467 - Best: 87.4667 | Bd Acc: 99.7200 - Best: 99.7933 | Cross: 84.4000
Epoch 319:
 Train:
CE Loss: 0.0001 | Clean Acc: 99.8364 | Bd Acc: 99.7867 | Cross Acc: 97.0750
 Eval:
Clean Acc: 87.5133 - Best: 87.4667 | Bd Acc: 99.8600 - Best: 99.7933 | Cross: 84.4733
 Saving...
Epoch 320:
 Train:
CE Loss: 0.0001 | Clean Acc: 99.8653 | Bd Acc: 99.7257 | Cross Acc: 97.2578
 Eval:
Clean Acc: 87.4200 - Best: 87.5133 | Bd Acc: 99.7067 - Best: 99.8600 | Cross: 84.3533
Epoch 321:
 Train:
CE Loss: 0.0001 | Clean Acc: 99.8749 | Bd Acc: 99.7867 | Cross Acc: 96.5265
 Eval:
Clean Acc: 87.4467 - Best: 87.5133 | Bd Acc: 99.7467 - Best: 99.8600 | Cross: 84.2800
Epoch 322:
 Train:
CE Loss: 0.0001 | Clean Acc: 99.8877 | Bd Acc: 99.6647 | Cross Acc: 97.2578
 Eval:
Clean Acc: 87.4133 - Best: 87.5133 | Bd Acc: 99.6667 - Best: 99.8600 | Cross: 84.4000
Epoch 323:
 Train:
CE Loss: 0.0001 | Clean Acc: 99.8909 | Bd Acc: 99.6647 | Cross Acc: 97.8062
 Eval:
Clean Acc: 87.5600 - Best: 87.5133 | Bd Acc: 99.8333 - Best: 99.8600 | Cross: 84.5200
 Saving...
Epoch 324:
 Train:
CE Loss: 0.0001 | Clean Acc: 99.8556 | Bd Acc: 99.6647 | Cross Acc: 97.8062
 Eval:
Clean Acc: 87.5533 - Best: 87.5600 | Bd Acc: 99.8267 - Best: 99.8333 | Cross: 84.1600
Epoch 325:
 Train:
CE Loss: 0.0001 | Clean Acc: 99.8813 | Bd Acc: 99.6038 | Cross Acc: 99.0859
 Eval:
Clean Acc: 87.4667 - Best: 87.5600 | Bd Acc: 99.8200 - Best: 99.8333 | Cross: 84.4867
Epoch 326:
 Train:
CE Loss: 0.0001 | Clean Acc: 99.8781 | Bd Acc: 99.6343 | Cross Acc: 97.0750
 Eval:
Clean Acc: 87.6667 - Best: 87.5600 | Bd Acc: 99.8667 - Best: 99.8333 | Cross: 84.7667
 Saving...
Epoch 327:
 Train:
CE Loss: 0.0001 | Clean Acc: 99.9102 | Bd Acc: 99.7257 | Cross Acc: 96.7093
 Eval:
Clean Acc: 87.4933 - Best: 87.6667 | Bd Acc: 99.7000 - Best: 99.8667 | Cross: 84.1800
Epoch 328:
 Train:
CE Loss: 0.0001 | Clean Acc: 99.8685 | Bd Acc: 99.7562 | Cross Acc: 97.8062
 Eval:
Clean Acc: 87.4533 - Best: 87.6667 | Bd Acc: 99.8133 - Best: 99.8667 | Cross: 84.2800
Epoch 329:
 Train:
CE Loss: 0.0001 | Clean Acc: 99.8813 | Bd Acc: 99.6647 | Cross Acc: 97.6234
 Eval:
Clean Acc: 87.4600 - Best: 87.6667 | Bd Acc: 99.8000 - Best: 99.8667 | Cross: 84.5533
Epoch 330:
 Train:
CE Loss: 0.0001 | Clean Acc: 99.8075 | Bd Acc: 99.7257 | Cross Acc: 96.1609
 Eval:
Clean Acc: 87.4733 - Best: 87.6667 | Bd Acc: 99.7000 - Best: 99.8667 | Cross: 84.5333
Epoch 331:
 Train:
CE Loss: 0.0001 | Clean Acc: 99.8781 | Bd Acc: 99.6952 | Cross Acc: 97.8062
 Eval:
Clean Acc: 87.5933 - Best: 87.6667 | Bd Acc: 99.8200 - Best: 99.8667 | Cross: 84.3467
Epoch 332:
 Train:
CE Loss: 0.0001 | Clean Acc: 99.9006 | Bd Acc: 99.8171 | Cross Acc: 97.2578
 Eval:
Clean Acc: 87.4400 - Best: 87.6667 | Bd Acc: 99.7400 - Best: 99.8667 | Cross: 84.6933
Epoch 333:
 Train:
CE Loss: 0.0001 | Clean Acc: 99.8460 | Bd Acc: 99.7257 | Cross Acc: 98.9031
 Eval:
Clean Acc: 87.3600 - Best: 87.6667 | Bd Acc: 99.6600 - Best: 99.8667 | Cross: 84.4333
Epoch 334:
 Train:
CE Loss: 0.0001 | Clean Acc: 99.8460 | Bd Acc: 99.7867 | Cross Acc: 97.2578
 Eval:
Clean Acc: 87.5800 - Best: 87.6667 | Bd Acc: 99.7733 - Best: 99.8667 | Cross: 84.2667
Epoch 335:
 Train:
CE Loss: 0.0001 | Clean Acc: 99.9038 | Bd Acc: 99.7257 | Cross Acc: 98.1719
 Eval:
Clean Acc: 87.4667 - Best: 87.6667 | Bd Acc: 99.7533 - Best: 99.8667 | Cross: 84.3333
Epoch 336:
 Train:
CE Loss: 0.0001 | Clean Acc: 99.8877 | Bd Acc: 99.4819 | Cross Acc: 96.7093
 Eval:
Clean Acc: 87.5333 - Best: 87.6667 | Bd Acc: 99.8533 - Best: 99.8667 | Cross: 84.6400
Epoch 337:
 Train:
CE Loss: 0.0001 | Clean Acc: 99.8845 | Bd Acc: 99.6952 | Cross Acc: 97.6234
 Eval:
Clean Acc: 87.5067 - Best: 87.6667 | Bd Acc: 99.7000 - Best: 99.8667 | Cross: 84.2333
Epoch 338:
 Train:
CE Loss: 0.0001 | Clean Acc: 99.8813 | Bd Acc: 99.8171 | Cross Acc: 96.8921
 Eval:
Clean Acc: 87.3933 - Best: 87.6667 | Bd Acc: 99.7867 - Best: 99.8667 | Cross: 84.6133
Epoch 339:
 Train:
CE Loss: 0.0001 | Clean Acc: 99.8685 | Bd Acc: 99.6343 | Cross Acc: 96.8921
 Eval:
Clean Acc: 87.5267 - Best: 87.6667 | Bd Acc: 99.7067 - Best: 99.8667 | Cross: 84.2867
Epoch 340:
 Train:
CE Loss: 0.0001 | Clean Acc: 99.8749 | Bd Acc: 99.6647 | Cross Acc: 97.0750
 Eval:
Clean Acc: 87.5000 - Best: 87.6667 | Bd Acc: 99.7267 - Best: 99.8667 | Cross: 84.0533
Epoch 341:
 Train:
CE Loss: 0.0001 | Clean Acc: 99.8909 | Bd Acc: 99.6038 | Cross Acc: 98.3547
 Eval:
Clean Acc: 87.5000 - Best: 87.6667 | Bd Acc: 99.7533 - Best: 99.8667 | Cross: 84.3067
Epoch 342:
 Train:
CE Loss: 0.0001 | Clean Acc: 99.8653 | Bd Acc: 99.7257 | Cross Acc: 97.8062
 Eval:
Clean Acc: 87.5933 - Best: 87.6667 | Bd Acc: 99.7667 - Best: 99.8667 | Cross: 84.3867
Epoch 343:
 Train:
CE Loss: 0.0001 | Clean Acc: 99.8973 | Bd Acc: 99.6647 | Cross Acc: 97.2578
 Eval:
Clean Acc: 87.4933 - Best: 87.6667 | Bd Acc: 99.6600 - Best: 99.8667 | Cross: 84.1133
Epoch 344:
 Train:
CE Loss: 0.0001 | Clean Acc: 99.8621 | Bd Acc: 99.5733 | Cross Acc: 97.9890
 Eval:
Clean Acc: 87.5533 - Best: 87.6667 | Bd Acc: 99.8067 - Best: 99.8667 | Cross: 84.2400
Epoch 345:
 Train:
CE Loss: 0.0001 | Clean Acc: 99.8941 | Bd Acc: 99.6647 | Cross Acc: 98.5375
 Eval:
Clean Acc: 87.5000 - Best: 87.6667 | Bd Acc: 99.8200 - Best: 99.8667 | Cross: 84.5600
Epoch 346:
 Train:
CE Loss: 0.0001 | Clean Acc: 99.8556 | Bd Acc: 99.6952 | Cross Acc: 99.0859
 Eval:
Clean Acc: 87.5000 - Best: 87.6667 | Bd Acc: 99.8400 - Best: 99.8667 | Cross: 84.3733
Epoch 347:
 Train:
CE Loss: 0.0001 | Clean Acc: 99.8749 | Bd Acc: 99.6952 | Cross Acc: 96.7093
 Eval:
Clean Acc: 87.5333 - Best: 87.6667 | Bd Acc: 99.8200 - Best: 99.8667 | Cross: 83.9667
Epoch 348:
 Train:
CE Loss: 0.0001 | Clean Acc: 99.9134 | Bd Acc: 99.6343 | Cross Acc: 96.8921
 Eval:
Clean Acc: 87.5267 - Best: 87.6667 | Bd Acc: 99.7933 - Best: 99.8667 | Cross: 84.6600
Epoch 349:
 Train:
CE Loss: 0.0001 | Clean Acc: 99.8749 | Bd Acc: 99.6343 | Cross Acc: 97.2578
 Eval:
Clean Acc: 87.5200 - Best: 87.6667 | Bd Acc: 99.7133 - Best: 99.8667 | Cross: 84.1467
Epoch 350:
 Train:
CE Loss: 0.0001 | Clean Acc: 99.9166 | Bd Acc: 99.7562 | Cross Acc: 97.8062
 Eval:
Clean Acc: 87.5467 - Best: 87.6667 | Bd Acc: 99.7133 - Best: 99.8667 | Cross: 84.4333
Epoch 351:
 Train:
CE Loss: 0.0001 | Clean Acc: 99.8749 | Bd Acc: 99.6038 | Cross Acc: 97.8062
 Eval:
Clean Acc: 87.4533 - Best: 87.6667 | Bd Acc: 99.8267 - Best: 99.8667 | Cross: 84.5600
Epoch 352:
 Train:
CE Loss: 0.0001 | Clean Acc: 99.8877 | Bd Acc: 99.8171 | Cross Acc: 97.2578
 Eval:
Clean Acc: 87.6067 - Best: 87.6667 | Bd Acc: 99.8533 - Best: 99.8667 | Cross: 84.7733
Epoch 353:
 Train:
CE Loss: 0.0001 | Clean Acc: 99.8973 | Bd Acc: 99.7257 | Cross Acc: 97.6234
 Eval:
Clean Acc: 87.4200 - Best: 87.6667 | Bd Acc: 99.8000 - Best: 99.8667 | Cross: 84.4467
Epoch 354:
 Train:
CE Loss: 0.0001 | Clean Acc: 99.8268 | Bd Acc: 99.8171 | Cross Acc: 97.8062
 Eval:
Clean Acc: 87.5133 - Best: 87.6667 | Bd Acc: 99.8067 - Best: 99.8667 | Cross: 84.3133
Epoch 355:
 Train:
CE Loss: 0.0001 | Clean Acc: 99.8588 | Bd Acc: 99.7257 | Cross Acc: 98.9031
 Eval:
Clean Acc: 87.3667 - Best: 87.6667 | Bd Acc: 99.6867 - Best: 99.8667 | Cross: 84.1400
Epoch 356:
 Train:
CE Loss: 0.0001 | Clean Acc: 99.8621 | Bd Acc: 99.7867 | Cross Acc: 98.3547
 Eval:
Clean Acc: 87.5467 - Best: 87.6667 | Bd Acc: 99.7467 - Best: 99.8667 | Cross: 84.6267
Epoch 357:
 Train:
CE Loss: 0.0001 | Clean Acc: 99.9070 | Bd Acc: 99.6952 | Cross Acc: 97.6234
 Eval:
Clean Acc: 87.5333 - Best: 87.6667 | Bd Acc: 99.7067 - Best: 99.8667 | Cross: 84.3400
Epoch 358:
 Train:
CE Loss: 0.0001 | Clean Acc: 99.9006 | Bd Acc: 99.6038 | Cross Acc: 97.4406
 Eval:
Clean Acc: 87.4600 - Best: 87.6667 | Bd Acc: 99.7067 - Best: 99.8667 | Cross: 84.3600
Epoch 359:
 Train:
CE Loss: 0.0001 | Clean Acc: 99.8845 | Bd Acc: 99.6038 | Cross Acc: 96.5265
 Eval:
Clean Acc: 87.5000 - Best: 87.6667 | Bd Acc: 99.7733 - Best: 99.8667 | Cross: 84.5600
Epoch 360:
 Train:
CE Loss: 0.0001 | Clean Acc: 99.8717 | Bd Acc: 99.6647 | Cross Acc: 97.4406
 Eval:
Clean Acc: 87.4267 - Best: 87.6667 | Bd Acc: 99.6733 - Best: 99.8667 | Cross: 84.3067
Epoch 361:
 Train:
CE Loss: 0.0001 | Clean Acc: 99.8556 | Bd Acc: 99.6647 | Cross Acc: 98.3547
 Eval:
Clean Acc: 87.5400 - Best: 87.6667 | Bd Acc: 99.8267 - Best: 99.8667 | Cross: 84.1267
Epoch 362:
 Train:
CE Loss: 0.0001 | Clean Acc: 99.8524 | Bd Acc: 99.6647 | Cross Acc: 97.0750
 Eval:
Clean Acc: 87.4133 - Best: 87.6667 | Bd Acc: 99.7533 - Best: 99.8667 | Cross: 83.9467
Epoch 363:
 Train:
CE Loss: 0.0001 | Clean Acc: 99.8877 | Bd Acc: 99.6647 | Cross Acc: 98.3547
 Eval:
Clean Acc: 87.5600 - Best: 87.6667 | Bd Acc: 99.8067 - Best: 99.8667 | Cross: 84.1867
Epoch 364:
 Train:
CE Loss: 0.0001 | Clean Acc: 99.9006 | Bd Acc: 99.7867 | Cross Acc: 98.1719
 Eval:
Clean Acc: 87.5933 - Best: 87.6667 | Bd Acc: 99.7000 - Best: 99.8667 | Cross: 84.3933
Epoch 365:
 Train:
CE Loss: 0.0001 | Clean Acc: 99.8749 | Bd Acc: 99.8781 | Cross Acc: 97.6234
 Eval:
Clean Acc: 87.5933 - Best: 87.6667 | Bd Acc: 99.7800 - Best: 99.8667 | Cross: 84.4800
Epoch 366:
 Train:
CE Loss: 0.0001 | Clean Acc: 99.8749 | Bd Acc: 99.7867 | Cross Acc: 97.9890
 Eval:
Clean Acc: 87.5200 - Best: 87.6667 | Bd Acc: 99.8200 - Best: 99.8667 | Cross: 84.4600
Epoch 367:
 Train:
CE Loss: 0.0001 | Clean Acc: 99.8524 | Bd Acc: 99.6952 | Cross Acc: 97.8062
 Eval:
Clean Acc: 87.6067 - Best: 87.6667 | Bd Acc: 99.7000 - Best: 99.8667 | Cross: 84.7400
Epoch 368:
 Train:
CE Loss: 0.0001 | Clean Acc: 99.8781 | Bd Acc: 99.8171 | Cross Acc: 98.1719
 Eval:
Clean Acc: 87.5133 - Best: 87.6667 | Bd Acc: 99.8267 - Best: 99.8667 | Cross: 84.5667
Epoch 369:
 Train:
CE Loss: 0.0001 | Clean Acc: 99.8492 | Bd Acc: 99.7867 | Cross Acc: 97.6234
 Eval:
Clean Acc: 87.5467 - Best: 87.6667 | Bd Acc: 99.8267 - Best: 99.8667 | Cross: 84.3267
Epoch 370:
 Train:
CE Loss: 0.0001 | Clean Acc: 99.8396 | Bd Acc: 99.6647 | Cross Acc: 96.8921
 Eval:
Clean Acc: 87.6267 - Best: 87.6667 | Bd Acc: 99.7933 - Best: 99.8667 | Cross: 83.9867
Epoch 371:
 Train:
CE Loss: 0.0001 | Clean Acc: 99.8877 | Bd Acc: 99.7867 | Cross Acc: 97.9890
 Eval:
Clean Acc: 87.5533 - Best: 87.6667 | Bd Acc: 99.8000 - Best: 99.8667 | Cross: 84.3333
Epoch 372:
 Train:
CE Loss: 0.0001 | Clean Acc: 99.8973 | Bd Acc: 99.7867 | Cross Acc: 97.4406
 Eval:
Clean Acc: 87.7133 - Best: 87.6667 | Bd Acc: 99.8667 - Best: 99.8667 | Cross: 84.5867
 Saving...
Epoch 373:
 Train:
CE Loss: 0.0001 | Clean Acc: 99.8813 | Bd Acc: 99.7562 | Cross Acc: 97.6234
 Eval:
Clean Acc: 87.6000 - Best: 87.7133 | Bd Acc: 99.8867 - Best: 99.8667 | Cross: 84.3867
Epoch 374:
 Train:
CE Loss: 0.0001 | Clean Acc: 99.8556 | Bd Acc: 99.7257 | Cross Acc: 97.4406
 Eval:
Clean Acc: 87.5800 - Best: 87.7133 | Bd Acc: 99.8467 - Best: 99.8667 | Cross: 84.3067
Epoch 375:
 Train:
CE Loss: 0.0001 | Clean Acc: 99.8685 | Bd Acc: 99.5428 | Cross Acc: 98.3547
 Eval:
Clean Acc: 87.5733 - Best: 87.7133 | Bd Acc: 99.8533 - Best: 99.8667 | Cross: 84.3867
Epoch 376:
 Train:
CE Loss: 0.0001 | Clean Acc: 99.8396 | Bd Acc: 99.5733 | Cross Acc: 96.3437
 Eval:
Clean Acc: 87.5000 - Best: 87.7133 | Bd Acc: 99.8067 - Best: 99.8667 | Cross: 84.3933
Epoch 377:
 Train:
CE Loss: 0.0001 | Clean Acc: 99.8845 | Bd Acc: 99.6038 | Cross Acc: 96.8921
 Eval:
Clean Acc: 87.5000 - Best: 87.7133 | Bd Acc: 99.8533 - Best: 99.8667 | Cross: 84.4867
Epoch 378:
 Train:
CE Loss: 0.0001 | Clean Acc: 99.9166 | Bd Acc: 99.6952 | Cross Acc: 97.6234
 Eval:
Clean Acc: 87.4733 - Best: 87.7133 | Bd Acc: 99.8400 - Best: 99.8667 | Cross: 84.2333
Epoch 379:
 Train:
CE Loss: 0.0001 | Clean Acc: 99.8781 | Bd Acc: 99.7257 | Cross Acc: 97.4406
 Eval:
Clean Acc: 87.5333 - Best: 87.7133 | Bd Acc: 99.7000 - Best: 99.8667 | Cross: 84.3933
Epoch 380:
 Train:
CE Loss: 0.0001 | Clean Acc: 99.8717 | Bd Acc: 99.8171 | Cross Acc: 96.8921
 Eval:
Clean Acc: 87.3600 - Best: 87.7133 | Bd Acc: 99.6800 - Best: 99.8667 | Cross: 84.1200
Epoch 381:
 Train:
CE Loss: 0.0001 | Clean Acc: 99.8845 | Bd Acc: 99.6343 | Cross Acc: 97.9890
 Eval:
Clean Acc: 87.5067 - Best: 87.7133 | Bd Acc: 99.8400 - Best: 99.8667 | Cross: 84.1267
Epoch 382:
 Train:
CE Loss: 0.0001 | Clean Acc: 99.8364 | Bd Acc: 99.6038 | Cross Acc: 97.6234
 Eval:
Clean Acc: 87.4400 - Best: 87.7133 | Bd Acc: 99.7467 - Best: 99.8667 | Cross: 84.5267
Epoch 383:
 Train:
CE Loss: 0.0001 | Clean Acc: 99.8781 | Bd Acc: 99.6343 | Cross Acc: 97.9890
 Eval:
Clean Acc: 87.4600 - Best: 87.7133 | Bd Acc: 99.7067 - Best: 99.8667 | Cross: 84.6867
Epoch 384:
 Train:
CE Loss: 0.0001 | Clean Acc: 99.8877 | Bd Acc: 99.6038 | Cross Acc: 98.5375
 Eval:
Clean Acc: 87.4600 - Best: 87.7133 | Bd Acc: 99.6867 - Best: 99.8667 | Cross: 84.2600
Epoch 385:
 Train:
CE Loss: 0.0001 | Clean Acc: 99.9038 | Bd Acc: 99.7562 | Cross Acc: 98.3547
 Eval:
Clean Acc: 87.5667 - Best: 87.7133 | Bd Acc: 99.8400 - Best: 99.8667 | Cross: 84.2733
Epoch 386:
 Train:
CE Loss: 0.0001 | Clean Acc: 99.8941 | Bd Acc: 99.6952 | Cross Acc: 98.7203
 Eval:
Clean Acc: 87.5533 - Best: 87.7133 | Bd Acc: 99.8600 - Best: 99.8667 | Cross: 84.1933
Epoch 387:
 Train:
CE Loss: 0.0001 | Clean Acc: 99.8909 | Bd Acc: 99.6038 | Cross Acc: 97.9890
 Eval:
Clean Acc: 87.4933 - Best: 87.7133 | Bd Acc: 99.8400 - Best: 99.8667 | Cross: 84.3200
Epoch 388:
 Train:
CE Loss: 0.0001 | Clean Acc: 99.9262 | Bd Acc: 99.7257 | Cross Acc: 97.2578
 Eval:
Clean Acc: 87.5600 - Best: 87.7133 | Bd Acc: 99.8800 - Best: 99.8667 | Cross: 83.9867
Epoch 389:
 Train:
CE Loss: 0.0001 | Clean Acc: 99.8941 | Bd Acc: 99.7867 | Cross Acc: 96.5265
 Eval:
Clean Acc: 87.6200 - Best: 87.7133 | Bd Acc: 99.8133 - Best: 99.8667 | Cross: 84.2333
Epoch 390:
 Train:
CE Loss: 0.0001 | Clean Acc: 99.8588 | Bd Acc: 99.7257 | Cross Acc: 97.2578
 Eval:
Clean Acc: 87.4200 - Best: 87.7133 | Bd Acc: 99.7467 - Best: 99.8667 | Cross: 84.3400
Epoch 391:
 Train:
CE Loss: 0.0001 | Clean Acc: 99.8781 | Bd Acc: 99.7257 | Cross Acc: 96.5265
 Eval:
Clean Acc: 87.5600 - Best: 87.7133 | Bd Acc: 99.8000 - Best: 99.8667 | Cross: 84.4667
Epoch 392:
 Train:
CE Loss: 0.0001 | Clean Acc: 99.8588 | Bd Acc: 99.7257 | Cross Acc: 97.6234
 Eval:
Clean Acc: 87.5800 - Best: 87.7133 | Bd Acc: 99.7733 - Best: 99.8667 | Cross: 84.2867
Epoch 393:
 Train:
CE Loss: 0.0001 | Clean Acc: 99.8653 | Bd Acc: 99.6952 | Cross Acc: 96.8921
 Eval:
Clean Acc: 87.3533 - Best: 87.7133 | Bd Acc: 99.6733 - Best: 99.8667 | Cross: 84.4200
Epoch 394:
 Train:
CE Loss: 0.0001 | Clean Acc: 99.8749 | Bd Acc: 99.7867 | Cross Acc: 97.9890
 Eval:
Clean Acc: 87.5533 - Best: 87.7133 | Bd Acc: 99.8667 - Best: 99.8667 | Cross: 84.6200
Epoch 395:
 Train:
CE Loss: 0.0001 | Clean Acc: 99.8973 | Bd Acc: 99.7257 | Cross Acc: 98.5375
 Eval:
Clean Acc: 87.5067 - Best: 87.7133 | Bd Acc: 99.7067 - Best: 99.8667 | Cross: 84.5200
Epoch 396:
 Train:
CE Loss: 0.0001 | Clean Acc: 99.8588 | Bd Acc: 99.6038 | Cross Acc: 97.2578
 Eval:
Clean Acc: 87.6733 - Best: 87.7133 | Bd Acc: 99.8333 - Best: 99.8667 | Cross: 84.4400
Epoch 397:
 Train:
CE Loss: 0.0001 | Clean Acc: 99.8813 | Bd Acc: 99.6952 | Cross Acc: 98.7203
 Eval:
Clean Acc: 87.4800 - Best: 87.7133 | Bd Acc: 99.7200 - Best: 99.8667 | Cross: 84.4133
Epoch 398:
 Train:
CE Loss: 0.0001 | Clean Acc: 99.8588 | Bd Acc: 99.6647 | Cross Acc: 97.6234
 Eval:
Clean Acc: 87.5400 - Best: 87.7133 | Bd Acc: 99.7333 - Best: 99.8667 | Cross: 84.5067
Epoch 399:
 Train:
CE Loss: 0.0001 | Clean Acc: 99.8973 | Bd Acc: 99.6647 | Cross Acc: 97.9890
 Eval:
Clean Acc: 87.5067 - Best: 87.7133 | Bd Acc: 99.8333 - Best: 99.8667 | Cross: 84.5400
Epoch 400:
 Train:
CE Loss: 0.0001 | Clean Acc: 99.8941 | Bd Acc: 99.7562 | Cross Acc: 97.6234
 Eval:
Clean Acc: 87.5400 - Best: 87.7133 | Bd Acc: 99.8200 - Best: 99.8667 | Cross: 84.2533
Epoch 401:
 Train:
CE Loss: 0.0001 | Clean Acc: 99.9102 | Bd Acc: 99.6647 | Cross Acc: 97.8062
 Eval:
Clean Acc: 87.4867 - Best: 87.7133 | Bd Acc: 99.7667 - Best: 99.8667 | Cross: 84.5933
Epoch 402:
 Train:
CE Loss: 0.0001 | Clean Acc: 99.8556 | Bd Acc: 99.6343 | Cross Acc: 97.6234
 Eval:
Clean Acc: 87.5600 - Best: 87.7133 | Bd Acc: 99.8200 - Best: 99.8667 | Cross: 84.5533
Epoch 403:
 Train:
CE Loss: 0.0001 | Clean Acc: 99.8524 | Bd Acc: 99.6647 | Cross Acc: 97.2578
 Eval:
Clean Acc: 87.5333 - Best: 87.7133 | Bd Acc: 99.8333 - Best: 99.8667 | Cross: 84.3067
Epoch 404:
 Train:
CE Loss: 0.0001 | Clean Acc: 99.8973 | Bd Acc: 99.8171 | Cross Acc: 97.6234
 Eval:
Clean Acc: 87.4733 - Best: 87.7133 | Bd Acc: 99.8133 - Best: 99.8667 | Cross: 84.3867
Epoch 405:
 Train:
CE Loss: 0.0001 | Clean Acc: 99.8556 | Bd Acc: 99.6343 | Cross Acc: 96.8921
 Eval:
Clean Acc: 87.4933 - Best: 87.7133 | Bd Acc: 99.8000 - Best: 99.8667 | Cross: 84.4667
Epoch 406:
 Train:
CE Loss: 0.0001 | Clean Acc: 99.8621 | Bd Acc: 99.7867 | Cross Acc: 97.8062
 Eval:
Clean Acc: 87.5400 - Best: 87.7133 | Bd Acc: 99.7133 - Best: 99.8667 | Cross: 84.3733
Epoch 407:
 Train:
CE Loss: 0.0001 | Clean Acc: 99.9326 | Bd Acc: 99.8171 | Cross Acc: 97.0750
 Eval:
Clean Acc: 87.5667 - Best: 87.7133 | Bd Acc: 99.8200 - Best: 99.8667 | Cross: 84.7067
Epoch 408:
 Train:
CE Loss: 0.0001 | Clean Acc: 99.9038 | Bd Acc: 99.6647 | Cross Acc: 97.2578
 Eval:
Clean Acc: 87.4600 - Best: 87.7133 | Bd Acc: 99.7800 - Best: 99.8667 | Cross: 84.4533
Epoch 409:
 Train:
CE Loss: 0.0001 | Clean Acc: 99.8845 | Bd Acc: 99.7867 | Cross Acc: 97.2578
 Eval:
Clean Acc: 87.6133 - Best: 87.7133 | Bd Acc: 99.8333 - Best: 99.8667 | Cross: 84.6067
Epoch 410:
 Train:
CE Loss: 0.0001 | Clean Acc: 99.8973 | Bd Acc: 99.7257 | Cross Acc: 97.6234
 Eval:
Clean Acc: 87.2533 - Best: 87.7133 | Bd Acc: 99.7333 - Best: 99.8667 | Cross: 84.1867
Epoch 411:
 Train:
CE Loss: 0.0001 | Clean Acc: 99.8877 | Bd Acc: 99.6038 | Cross Acc: 97.8062
 Eval:
Clean Acc: 87.4000 - Best: 87.7133 | Bd Acc: 99.7400 - Best: 99.8667 | Cross: 84.1667
Epoch 412:
 Train:
CE Loss: 0.0001 | Clean Acc: 99.8877 | Bd Acc: 99.6647 | Cross Acc: 97.9890
 Eval:
Clean Acc: 87.5267 - Best: 87.7133 | Bd Acc: 99.8133 - Best: 99.8667 | Cross: 84.3800
Epoch 413:
 Train:
CE Loss: 0.0001 | Clean Acc: 99.8685 | Bd Acc: 99.6343 | Cross Acc: 97.0750
 Eval:
Clean Acc: 87.4267 - Best: 87.7133 | Bd Acc: 99.8067 - Best: 99.8667 | Cross: 84.5000
Epoch 414:
 Train:
CE Loss: 0.0001 | Clean Acc: 99.8621 | Bd Acc: 99.6647 | Cross Acc: 96.8921
 Eval:
Clean Acc: 87.4400 - Best: 87.7133 | Bd Acc: 99.6800 - Best: 99.8667 | Cross: 84.5867
Epoch 415:
 Train:
CE Loss: 0.0001 | Clean Acc: 99.8941 | Bd Acc: 99.7257 | Cross Acc: 97.9890
 Eval:
Clean Acc: 87.4267 - Best: 87.7133 | Bd Acc: 99.6800 - Best: 99.8667 | Cross: 83.9667
Epoch 416:
 Train:
CE Loss: 0.0001 | Clean Acc: 99.8300 | Bd Acc: 99.7867 | Cross Acc: 97.9890
 Eval:
Clean Acc: 87.5200 - Best: 87.7133 | Bd Acc: 99.8533 - Best: 99.8667 | Cross: 84.4533
Epoch 417:
 Train:
CE Loss: 0.0001 | Clean Acc: 99.9006 | Bd Acc: 99.7867 | Cross Acc: 96.7093
 Eval:
Clean Acc: 87.4600 - Best: 87.7133 | Bd Acc: 99.8400 - Best: 99.8667 | Cross: 84.6467
Epoch 418:
 Train:
CE Loss: 0.0001 | Clean Acc: 99.8556 | Bd Acc: 99.6647 | Cross Acc: 98.1719
 Eval:
Clean Acc: 87.5467 - Best: 87.7133 | Bd Acc: 99.7800 - Best: 99.8667 | Cross: 84.1667
Epoch 419:
 Train:
CE Loss: 0.0001 | Clean Acc: 99.9134 | Bd Acc: 99.7867 | Cross Acc: 97.2578
 Eval:
Clean Acc: 87.5933 - Best: 87.7133 | Bd Acc: 99.8333 - Best: 99.8667 | Cross: 84.4733
Epoch 420:
 Train:
CE Loss: 0.0000 | Clean Acc: 99.8973 | Bd Acc: 99.6952 | Cross Acc: 98.9031
 Eval:
Clean Acc: 87.4533 - Best: 87.7133 | Bd Acc: 99.8267 - Best: 99.8667 | Cross: 84.4867
Epoch 421:
 Train:
CE Loss: 0.0000 | Clean Acc: 99.8941 | Bd Acc: 99.7867 | Cross Acc: 98.3547
 Eval:
Clean Acc: 87.5600 - Best: 87.7133 | Bd Acc: 99.8467 - Best: 99.8667 | Cross: 84.2267
Epoch 422:
 Train:
CE Loss: 0.0001 | Clean Acc: 99.8749 | Bd Acc: 99.5733 | Cross Acc: 97.2578
 Eval:
Clean Acc: 87.5133 - Best: 87.7133 | Bd Acc: 99.7467 - Best: 99.8667 | Cross: 84.3533
Epoch 423:
 Train:
CE Loss: 0.0001 | Clean Acc: 99.8685 | Bd Acc: 99.7257 | Cross Acc: 97.9890
 Eval:
Clean Acc: 87.5600 - Best: 87.7133 | Bd Acc: 99.7000 - Best: 99.8667 | Cross: 84.5267
Epoch 424:
 Train:
CE Loss: 0.0001 | Clean Acc: 99.8685 | Bd Acc: 99.7562 | Cross Acc: 97.9890
 Eval:
Clean Acc: 87.4600 - Best: 87.7133 | Bd Acc: 99.7800 - Best: 99.8667 | Cross: 84.4267
Epoch 425:
 Train:
CE Loss: 0.0001 | Clean Acc: 99.8717 | Bd Acc: 99.6647 | Cross Acc: 97.9890
 Eval:
Clean Acc: 87.4133 - Best: 87.7133 | Bd Acc: 99.5933 - Best: 99.8667 | Cross: 84.0933
Epoch 426:
 Train:
CE Loss: 0.0001 | Clean Acc: 99.8717 | Bd Acc: 99.5733 | Cross Acc: 99.0859
 Eval:
Clean Acc: 87.5733 - Best: 87.7133 | Bd Acc: 99.7333 - Best: 99.8667 | Cross: 84.1000
Epoch 427:
 Train:
CE Loss: 0.0001 | Clean Acc: 99.8749 | Bd Acc: 99.6343 | Cross Acc: 97.0750
 Eval:
Clean Acc: 87.5133 - Best: 87.7133 | Bd Acc: 99.7933 - Best: 99.8667 | Cross: 84.3733
Epoch 428:
 Train:
CE Loss: 0.0001 | Clean Acc: 99.8909 | Bd Acc: 99.7257 | Cross Acc: 97.4406
 Eval:
Clean Acc: 87.5467 - Best: 87.7133 | Bd Acc: 99.8800 - Best: 99.8667 | Cross: 84.3800
Epoch 429:
 Train:
CE Loss: 0.0001 | Clean Acc: 99.8364 | Bd Acc: 99.6647 | Cross Acc: 97.8062
 Eval:
Clean Acc: 87.6667 - Best: 87.7133 | Bd Acc: 99.7333 - Best: 99.8667 | Cross: 84.6400
Epoch 430:
 Train:
CE Loss: 0.0001 | Clean Acc: 99.8749 | Bd Acc: 99.6647 | Cross Acc: 96.7093
 Eval:
Clean Acc: 87.4667 - Best: 87.7133 | Bd Acc: 99.7867 - Best: 99.8667 | Cross: 84.3933
Epoch 431:
 Train:
CE Loss: 0.0001 | Clean Acc: 99.8845 | Bd Acc: 99.7867 | Cross Acc: 97.6234
 Eval:
Clean Acc: 87.5133 - Best: 87.7133 | Bd Acc: 99.8333 - Best: 99.8667 | Cross: 84.5867
Epoch 432:
 Train:
CE Loss: 0.0001 | Clean Acc: 99.8460 | Bd Acc: 99.7257 | Cross Acc: 97.6234
 Eval:
Clean Acc: 87.5467 - Best: 87.7133 | Bd Acc: 99.7800 - Best: 99.8667 | Cross: 84.4000
Epoch 433:
 Train:
CE Loss: 0.0001 | Clean Acc: 99.8621 | Bd Acc: 99.7562 | Cross Acc: 97.9890
 Eval:
Clean Acc: 87.4333 - Best: 87.7133 | Bd Acc: 99.6933 - Best: 99.8667 | Cross: 84.4733
Epoch 434:
 Train:
CE Loss: 0.0001 | Clean Acc: 99.8941 | Bd Acc: 99.7562 | Cross Acc: 97.8062
 Eval:
Clean Acc: 87.3533 - Best: 87.7133 | Bd Acc: 99.7000 - Best: 99.8667 | Cross: 84.4800
Epoch 435:
 Train:
CE Loss: 0.0001 | Clean Acc: 99.8524 | Bd Acc: 99.8476 | Cross Acc: 97.6234
 Eval:
Clean Acc: 87.4000 - Best: 87.7133 | Bd Acc: 99.7067 - Best: 99.8667 | Cross: 84.2733
Epoch 436:
 Train:
CE Loss: 0.0001 | Clean Acc: 99.8492 | Bd Acc: 99.6647 | Cross Acc: 97.9890
 Eval:
Clean Acc: 87.4667 - Best: 87.7133 | Bd Acc: 99.7667 - Best: 99.8667 | Cross: 84.5933
Epoch 437:
 Train:
CE Loss: 0.0001 | Clean Acc: 99.9070 | Bd Acc: 99.4819 | Cross Acc: 97.6234
 Eval:
Clean Acc: 87.4667 - Best: 87.7133 | Bd Acc: 99.8200 - Best: 99.8667 | Cross: 84.6733
Epoch 438:
 Train:
CE Loss: 0.0001 | Clean Acc: 99.8300 | Bd Acc: 99.6952 | Cross Acc: 97.2578
 Eval:
Clean Acc: 87.6667 - Best: 87.7133 | Bd Acc: 99.8400 - Best: 99.8667 | Cross: 84.4933
Epoch 439:
 Train:
CE Loss: 0.0001 | Clean Acc: 99.8973 | Bd Acc: 99.7867 | Cross Acc: 98.1719
 Eval:
Clean Acc: 87.6000 - Best: 87.7133 | Bd Acc: 99.8400 - Best: 99.8667 | Cross: 84.3733
Epoch 440:
 Train:
CE Loss: 0.0001 | Clean Acc: 99.8653 | Bd Acc: 99.7257 | Cross Acc: 98.5375
 Eval:
Clean Acc: 87.6333 - Best: 87.7133 | Bd Acc: 99.7600 - Best: 99.8667 | Cross: 84.3467
Epoch 441:
 Train:
CE Loss: 0.0001 | Clean Acc: 99.8492 | Bd Acc: 99.6343 | Cross Acc: 97.6234
 Eval:
Clean Acc: 87.5200 - Best: 87.7133 | Bd Acc: 99.8200 - Best: 99.8667 | Cross: 84.1400
Epoch 442:
 Train:
CE Loss: 0.0001 | Clean Acc: 99.9166 | Bd Acc: 99.5733 | Cross Acc: 97.4406
 Eval:
Clean Acc: 87.4800 - Best: 87.7133 | Bd Acc: 99.7933 - Best: 99.8667 | Cross: 84.4533
Epoch 443:
 Train:
CE Loss: 0.0001 | Clean Acc: 99.8813 | Bd Acc: 99.6038 | Cross Acc: 97.0750
 Eval:
Clean Acc: 87.5000 - Best: 87.7133 | Bd Acc: 99.6733 - Best: 99.8667 | Cross: 84.4400
Epoch 444:
 Train:
CE Loss: 0.0001 | Clean Acc: 99.8909 | Bd Acc: 99.7257 | Cross Acc: 97.8062
 Eval:
Clean Acc: 87.5667 - Best: 87.7133 | Bd Acc: 99.7067 - Best: 99.8667 | Cross: 84.3000
Epoch 445:
 Train:
CE Loss: 0.0001 | Clean Acc: 99.8781 | Bd Acc: 99.6343 | Cross Acc: 97.9890
 Eval:
Clean Acc: 87.4533 - Best: 87.7133 | Bd Acc: 99.7000 - Best: 99.8667 | Cross: 84.4933
Epoch 446:
 Train:
CE Loss: 0.0001 | Clean Acc: 99.8749 | Bd Acc: 99.7562 | Cross Acc: 97.8062
 Eval:
Clean Acc: 87.5800 - Best: 87.7133 | Bd Acc: 99.8733 - Best: 99.8667 | Cross: 84.4267
Epoch 447:
 Train:
CE Loss: 0.0001 | Clean Acc: 99.8717 | Bd Acc: 99.5428 | Cross Acc: 97.4406
 Eval:
Clean Acc: 87.4933 - Best: 87.7133 | Bd Acc: 99.7400 - Best: 99.8667 | Cross: 84.1333
Epoch 448:
 Train:
CE Loss: 0.0001 | Clean Acc: 99.8845 | Bd Acc: 99.5123 | Cross Acc: 98.1719
 Eval:
Clean Acc: 87.4800 - Best: 87.7133 | Bd Acc: 99.8333 - Best: 99.8667 | Cross: 84.3933
Epoch 449:
 Train:
CE Loss: 0.0001 | Clean Acc: 99.8588 | Bd Acc: 99.6343 | Cross Acc: 97.4406
 Eval:
Clean Acc: 87.4667 - Best: 87.7133 | Bd Acc: 99.6467 - Best: 99.8667 | Cross: 84.6000
Epoch 450:
 Train:
CE Loss: 0.0001 | Clean Acc: 99.8364 | Bd Acc: 99.7257 | Cross Acc: 97.4406
 Eval:
Clean Acc: 87.5933 - Best: 87.7133 | Bd Acc: 99.8733 - Best: 99.8667 | Cross: 84.3667
Epoch 451:
 Train:
CE Loss: 0.0001 | Clean Acc: 99.8877 | Bd Acc: 99.8476 | Cross Acc: 96.8921
 Eval:
Clean Acc: 87.5733 - Best: 87.7133 | Bd Acc: 99.8200 - Best: 99.8667 | Cross: 84.5133
Epoch 452:
 Train:
CE Loss: 0.0001 | Clean Acc: 99.8717 | Bd Acc: 99.7562 | Cross Acc: 97.6234
 Eval:
Clean Acc: 87.4667 - Best: 87.7133 | Bd Acc: 99.7200 - Best: 99.8667 | Cross: 84.3467
Epoch 453:
 Train:
CE Loss: 0.0001 | Clean Acc: 99.8877 | Bd Acc: 99.8171 | Cross Acc: 97.0750
 Eval:
Clean Acc: 87.5267 - Best: 87.7133 | Bd Acc: 99.8333 - Best: 99.8667 | Cross: 84.2467
Epoch 454:
 Train:
CE Loss: 0.0001 | Clean Acc: 99.8524 | Bd Acc: 99.7257 | Cross Acc: 97.4406
 Eval:
Clean Acc: 87.5600 - Best: 87.7133 | Bd Acc: 99.8467 - Best: 99.8667 | Cross: 84.1467
Epoch 455:
 Train:
CE Loss: 0.0001 | Clean Acc: 99.8877 | Bd Acc: 99.7867 | Cross Acc: 97.6234
 Eval:
Clean Acc: 87.5600 - Best: 87.7133 | Bd Acc: 99.7400 - Best: 99.8667 | Cross: 84.2733
Epoch 456:
 Train:
CE Loss: 0.0001 | Clean Acc: 99.8332 | Bd Acc: 99.7257 | Cross Acc: 98.3547
 Eval:
Clean Acc: 87.3067 - Best: 87.7133 | Bd Acc: 99.7267 - Best: 99.8667 | Cross: 84.3867
Epoch 457:
 Train:
CE Loss: 0.0001 | Clean Acc: 99.8621 | Bd Acc: 99.6343 | Cross Acc: 97.9890
 Eval:
Clean Acc: 87.5400 - Best: 87.7133 | Bd Acc: 99.7000 - Best: 99.8667 | Cross: 84.4467
Epoch 458:
 Train:
CE Loss: 0.0001 | Clean Acc: 99.9198 | Bd Acc: 99.3599 | Cross Acc: 98.3547
 Eval:
Clean Acc: 87.5133 - Best: 87.7133 | Bd Acc: 99.7600 - Best: 99.8667 | Cross: 84.3200
Epoch 459:
 Train:
CE Loss: 0.0001 | Clean Acc: 99.8973 | Bd Acc: 99.6952 | Cross Acc: 95.7952
 Eval:
Clean Acc: 87.5800 - Best: 87.7133 | Bd Acc: 99.8667 - Best: 99.8667 | Cross: 84.5333
Epoch 460:
 Train:
CE Loss: 0.0001 | Clean Acc: 99.9166 | Bd Acc: 99.6647 | Cross Acc: 98.3547
 Eval:
Clean Acc: 87.5533 - Best: 87.7133 | Bd Acc: 99.7600 - Best: 99.8667 | Cross: 84.7867
Epoch 461:
 Train:
CE Loss: 0.0001 | Clean Acc: 99.8877 | Bd Acc: 99.9086 | Cross Acc: 97.0750
 Eval:
Clean Acc: 87.5667 - Best: 87.7133 | Bd Acc: 99.7933 - Best: 99.8667 | Cross: 84.3933
Epoch 462:
 Train:
CE Loss: 0.0001 | Clean Acc: 99.9038 | Bd Acc: 99.6038 | Cross Acc: 98.3547
 Eval:
Clean Acc: 87.4400 - Best: 87.7133 | Bd Acc: 99.8000 - Best: 99.8667 | Cross: 84.3600
Epoch 463:
 Train:
CE Loss: 0.0001 | Clean Acc: 99.8877 | Bd Acc: 99.6343 | Cross Acc: 97.8062
 Eval:
Clean Acc: 87.6000 - Best: 87.7133 | Bd Acc: 99.8667 - Best: 99.8667 | Cross: 84.5133
Epoch 464:
 Train:
CE Loss: 0.0001 | Clean Acc: 99.8909 | Bd Acc: 99.6343 | Cross Acc: 97.0750
 Eval:
Clean Acc: 87.6267 - Best: 87.7133 | Bd Acc: 99.7867 - Best: 99.8667 | Cross: 84.2067
Epoch 465:
 Train:
CE Loss: 0.0001 | Clean Acc: 99.8556 | Bd Acc: 99.6038 | Cross Acc: 98.3547
 Eval:
Clean Acc: 87.4667 - Best: 87.7133 | Bd Acc: 99.7667 - Best: 99.8667 | Cross: 84.2800
Epoch 466:
 Train:
CE Loss: 0.0001 | Clean Acc: 99.8749 | Bd Acc: 99.6038 | Cross Acc: 98.9031
 Eval:
Clean Acc: 87.5600 - Best: 87.7133 | Bd Acc: 99.7733 - Best: 99.8667 | Cross: 84.5333
Epoch 467:
 Train:
CE Loss: 0.0001 | Clean Acc: 99.8845 | Bd Acc: 99.8476 | Cross Acc: 98.3547
 Eval:
Clean Acc: 87.5267 - Best: 87.7133 | Bd Acc: 99.7133 - Best: 99.8667 | Cross: 84.3733
Epoch 468:
 Train:
CE Loss: 0.0001 | Clean Acc: 99.9038 | Bd Acc: 99.6647 | Cross Acc: 97.9890
 Eval:
Clean Acc: 87.7000 - Best: 87.7133 | Bd Acc: 99.8133 - Best: 99.8667 | Cross: 84.7733
Epoch 469:
 Train:
CE Loss: 0.0001 | Clean Acc: 99.8749 | Bd Acc: 99.6647 | Cross Acc: 96.3437
 Eval:
Clean Acc: 87.6067 - Best: 87.7133 | Bd Acc: 99.8200 - Best: 99.8667 | Cross: 84.1667
Epoch 470:
 Train:
CE Loss: 0.0001 | Clean Acc: 99.9070 | Bd Acc: 99.5428 | Cross Acc: 96.7093
 Eval:
Clean Acc: 87.5333 - Best: 87.7133 | Bd Acc: 99.8333 - Best: 99.8667 | Cross: 84.3867
Epoch 471:
 Train:
CE Loss: 0.0001 | Clean Acc: 99.9166 | Bd Acc: 99.7562 | Cross Acc: 97.9890
 Eval:
Clean Acc: 87.4600 - Best: 87.7133 | Bd Acc: 99.7133 - Best: 99.8667 | Cross: 84.4600
Epoch 472:
 Train:
CE Loss: 0.0001 | Clean Acc: 99.8749 | Bd Acc: 99.6952 | Cross Acc: 96.5265
 Eval:
Clean Acc: 87.4000 - Best: 87.7133 | Bd Acc: 99.7200 - Best: 99.8667 | Cross: 84.2600
Epoch 473:
 Train:
CE Loss: 0.0001 | Clean Acc: 99.8909 | Bd Acc: 99.6647 | Cross Acc: 97.2578
 Eval:
Clean Acc: 87.5267 - Best: 87.7133 | Bd Acc: 99.7667 - Best: 99.8667 | Cross: 84.5733
Epoch 474:
 Train:
CE Loss: 0.0001 | Clean Acc: 99.8941 | Bd Acc: 99.7562 | Cross Acc: 96.1609
 Eval:
Clean Acc: 87.4867 - Best: 87.7133 | Bd Acc: 99.8267 - Best: 99.8667 | Cross: 84.2533
Epoch 475:
 Train:
CE Loss: 0.0001 | Clean Acc: 99.8973 | Bd Acc: 99.5428 | Cross Acc: 96.5265
 Eval:
Clean Acc: 87.4333 - Best: 87.7133 | Bd Acc: 99.6467 - Best: 99.8667 | Cross: 84.1600
Epoch 476:
 Train:
CE Loss: 0.0001 | Clean Acc: 99.8941 | Bd Acc: 99.7562 | Cross Acc: 98.9031
 Eval:
Clean Acc: 87.5867 - Best: 87.7133 | Bd Acc: 99.6600 - Best: 99.8667 | Cross: 84.2733
Epoch 477:
 Train:
CE Loss: 0.0001 | Clean Acc: 99.8845 | Bd Acc: 99.7562 | Cross Acc: 97.4406
 Eval:
Clean Acc: 87.4933 - Best: 87.7133 | Bd Acc: 99.7933 - Best: 99.8667 | Cross: 84.3667
Epoch 478:
 Train:
CE Loss: 0.0001 | Clean Acc: 99.8588 | Bd Acc: 99.6038 | Cross Acc: 97.9890
 Eval:
Clean Acc: 87.4600 - Best: 87.7133 | Bd Acc: 99.7467 - Best: 99.8667 | Cross: 84.5200
Epoch 479:
 Train:
CE Loss: 0.0001 | Clean Acc: 99.8877 | Bd Acc: 99.8476 | Cross Acc: 98.9031
 Eval:
Clean Acc: 87.5667 - Best: 87.7133 | Bd Acc: 99.8067 - Best: 99.8667 | Cross: 84.6600
Epoch 480:
 Train:
CE Loss: 0.0001 | Clean Acc: 99.9038 | Bd Acc: 99.7867 | Cross Acc: 97.8062
 Eval:
Clean Acc: 87.5400 - Best: 87.7133 | Bd Acc: 99.7467 - Best: 99.8667 | Cross: 84.6667
Epoch 481:
 Train:
CE Loss: 0.0001 | Clean Acc: 99.9038 | Bd Acc: 99.6038 | Cross Acc: 97.2578
 Eval:
Clean Acc: 87.5267 - Best: 87.7133 | Bd Acc: 99.8000 - Best: 99.8667 | Cross: 84.3800
Epoch 482:
 Train:
CE Loss: 0.0001 | Clean Acc: 99.8781 | Bd Acc: 99.7257 | Cross Acc: 98.5375
 Eval:
Clean Acc: 87.4067 - Best: 87.7133 | Bd Acc: 99.7067 - Best: 99.8667 | Cross: 84.3600
Epoch 483:
 Train:
CE Loss: 0.0001 | Clean Acc: 99.9038 | Bd Acc: 99.7562 | Cross Acc: 97.4406
 Eval:
Clean Acc: 87.5000 - Best: 87.7133 | Bd Acc: 99.8600 - Best: 99.8667 | Cross: 84.1200
Epoch 484:
 Train:
CE Loss: 0.0001 | Clean Acc: 99.8909 | Bd Acc: 99.5428 | Cross Acc: 97.6234
 Eval:
Clean Acc: 87.5333 - Best: 87.7133 | Bd Acc: 99.7267 - Best: 99.8667 | Cross: 84.5200
Epoch 485:
 Train:
CE Loss: 0.0001 | Clean Acc: 99.8749 | Bd Acc: 99.5733 | Cross Acc: 97.2578
 Eval:
Clean Acc: 87.4733 - Best: 87.7133 | Bd Acc: 99.7933 - Best: 99.8667 | Cross: 84.3200
Epoch 486:
 Train:
CE Loss: 0.0001 | Clean Acc: 99.8556 | Bd Acc: 99.6343 | Cross Acc: 97.8062
 Eval:
Clean Acc: 87.5600 - Best: 87.7133 | Bd Acc: 99.8667 - Best: 99.8667 | Cross: 84.4933
Epoch 487:
 Train:
CE Loss: 0.0001 | Clean Acc: 99.8781 | Bd Acc: 99.7562 | Cross Acc: 97.4406
 Eval:
Clean Acc: 87.4933 - Best: 87.7133 | Bd Acc: 99.7933 - Best: 99.8667 | Cross: 84.3867
Epoch 488:
 Train:
CE Loss: 0.0001 | Clean Acc: 99.9070 | Bd Acc: 99.8476 | Cross Acc: 97.6234
 Eval:
Clean Acc: 87.6067 - Best: 87.7133 | Bd Acc: 99.8733 - Best: 99.8667 | Cross: 84.2800
Epoch 489:
 Train:
CE Loss: 0.0001 | Clean Acc: 99.9070 | Bd Acc: 99.7867 | Cross Acc: 97.4406
 Eval:
Clean Acc: 87.6000 - Best: 87.7133 | Bd Acc: 99.8133 - Best: 99.8667 | Cross: 84.3600
Epoch 490:
 Train:
CE Loss: 0.0001 | Clean Acc: 99.8588 | Bd Acc: 99.6952 | Cross Acc: 98.9031
 Eval:
Clean Acc: 87.4933 - Best: 87.7133 | Bd Acc: 99.8267 - Best: 99.8667 | Cross: 84.3667
Epoch 491:
 Train:
CE Loss: 0.0001 | Clean Acc: 99.8653 | Bd Acc: 99.7257 | Cross Acc: 96.5265
 Eval:
Clean Acc: 87.4467 - Best: 87.7133 | Bd Acc: 99.7867 - Best: 99.8667 | Cross: 84.2133
Epoch 492:
 Train:
CE Loss: 0.0001 | Clean Acc: 99.9006 | Bd Acc: 99.7257 | Cross Acc: 97.6234
 Eval:
Clean Acc: 87.5333 - Best: 87.7133 | Bd Acc: 99.8067 - Best: 99.8667 | Cross: 84.3600
Epoch 493:
 Train:
CE Loss: 0.0001 | Clean Acc: 99.8781 | Bd Acc: 99.8476 | Cross Acc: 97.0750
 Eval:
Clean Acc: 87.5467 - Best: 87.7133 | Bd Acc: 99.8200 - Best: 99.8667 | Cross: 84.1667
Epoch 494:
 Train:
CE Loss: 0.0001 | Clean Acc: 99.8556 | Bd Acc: 99.7257 | Cross Acc: 96.5265
 Eval:
Clean Acc: 87.5133 - Best: 87.7133 | Bd Acc: 99.8133 - Best: 99.8667 | Cross: 84.5200
Epoch 495:
 Train:
CE Loss: 0.0001 | Clean Acc: 99.8717 | Bd Acc: 99.6647 | Cross Acc: 97.4406
 Eval:
Clean Acc: 87.5133 - Best: 87.7133 | Bd Acc: 99.7867 - Best: 99.8667 | Cross: 84.3067
Epoch 496:
 Train:
CE Loss: 0.0001 | Clean Acc: 99.9006 | Bd Acc: 99.6038 | Cross Acc: 97.0750
 Eval:
Clean Acc: 87.5467 - Best: 87.7133 | Bd Acc: 99.7533 - Best: 99.8667 | Cross: 84.1667
Epoch 497:
 Train:
CE Loss: 0.0001 | Clean Acc: 99.8460 | Bd Acc: 99.5733 | Cross Acc: 97.2578
 Eval:
Clean Acc: 87.3333 - Best: 87.7133 | Bd Acc: 99.6600 - Best: 99.8667 | Cross: 84.4600
Epoch 498:
 Train:
CE Loss: 0.0001 | Clean Acc: 99.8845 | Bd Acc: 99.7562 | Cross Acc: 97.4406
 Eval:
Clean Acc: 87.5933 - Best: 87.7133 | Bd Acc: 99.7067 - Best: 99.8667 | Cross: 84.5800
Epoch 499:
 Train:
CE Loss: 0.0001 | Clean Acc: 99.9102 | Bd Acc: 99.9086 | Cross Acc: 97.4406
 Eval:
Clean Acc: 87.4467 - Best: 87.7133 | Bd Acc: 99.6467 - Best: 99.8667 | Cross: 84.5333
Epoch 500:
 Train:
CE Loss: 0.0001 | Clean Acc: 99.8685 | Bd Acc: 99.8171 | Cross Acc: 97.8062
 Eval:
Clean Acc: 87.4533 - Best: 87.7133 | Bd Acc: 99.8400 - Best: 99.8667 | Cross: 84.5200
`

export default defaultText;