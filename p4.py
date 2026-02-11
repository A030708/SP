from selenium import webdriver
import time

d = webdriver.Chrome()
d.get("https://example.com")
time.sleep(2)
d.save_screenshot("webpage_screenshot.png")
print("Screenshot saved")
d.quit()
