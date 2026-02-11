from selenium import webdriver
from selenium.webdriver.common.by import By
import time

d = webdriver.Chrome()
d.get("https://the-internet.herokuapp.com/javascript_alerts")

d.find_element(By.XPATH,"//button[text()='Click for JS Alert']").click()
print(d.switch_to.alert.text); d.switch_to.alert.accept()

d.find_element(By.XPATH,"//button[text()='Click for JS Confirm']").click()
print(d.switch_to.alert.text); d.switch_to.alert.dismiss()

time.sleep(1)
d.quit()
