from selenium import webdriver
from selenium.webdriver.common.by import By

d = webdriver.Chrome()
d.get("https://practicetestautomation.com/practice-test-login/")

d.find_element(By.ID, "username").send_keys("student")
d.find_element(By.ID, "password").send_keys("Password123")
d.find_element(By.ID, "submit").click()

print("Login successful!", d.find_element(By.CLASS_NAME, "post-title").text)

d.quit()
