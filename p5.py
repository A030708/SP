from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import Select
import time

d = webdriver.Chrome()
d.get("https://example.com/form")

d.find_element(By.NAME, "name").send_keys("John")
d.find_element(By.NAME, "email").send_keys("john@example.com")
d.find_element(By.NAME, "phone").send_keys("9876543210")

Select(d.find_element(By.NAME, "course")).select_by_visible_text("Python")
d.find_element(By.XPATH, "//input[@value='Male']").click()

time.sleep(2)
d.find_element(By.XPATH, "//button[@type='submit']").click()

d.quit()
