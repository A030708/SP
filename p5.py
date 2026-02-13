from selenium import webdriver
from selenium.webdriver.common.by import By
d = webdriver.Chrome()
d.maximize_window()
d.get("https://www.techlistic.com/p/selenium-practice-form.html")
d.find_element(By.NAME,"firstname").send_keys("John")
d.find_element(By.NAME,"lastname").send_keys("Doe")
d.execute_script("document.getElementById('sex-0').click()")
d.execute_script("document.getElementById('exp-2').click()")
d.execute_script("document.getElementById('submit').click()")
print(" Form submitted successfully")
d.quit()
