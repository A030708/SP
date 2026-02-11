import csv, os
from selenium import webdriver
from selenium.webdriver.common.by import By

os.makedirs("screenshots", exist_ok=True)
d = webdriver.Chrome()

with open("login_data.csv") as f:
    for row in csv.DictReader(f):
        d.get("https://the-internet.herokuapp.com/login")
        d.find_element(By.ID,"username").send_keys(row["username"])
        d.find_element(By.ID,"password").send_keys(row["password"])
        d.find_element(By.ID,"login").click()
        print(row["username"], "PASS")
        d.save_screenshot(f"screenshots/{row['username']}.png")
        d.delete_all_cookies()

d.quit()

username,password
tomsmith,SuperSecretPassword!
wronguser,wrongpass
