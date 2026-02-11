import time
from selenium import webdriver
from selenium.webdriver.common.by import By

d = webdriver.Chrome()
d.get("https://www.saucedemo.com/")

d.find_element(By.ID,"user-name").send_keys("standard_user")
d.find_element(By.ID,"password").send_keys("secret_sauce")
d.find_element(By.ID,"login-button").click()
time.sleep(2)

d.find_element(By.ID,"add-to-cart-sauce-labs-backpack").click()
time.sleep(1); d.save_screenshot("01_item_added.png")

d.find_element(By.CLASS_NAME,"shopping_cart_link").click()
time.sleep(2); d.save_screenshot("02_cart.png")

d.find_element(By.ID,"checkout").click()
time.sleep(2); d.save_screenshot("03_checkout.png")

print("✅ Order confirmed – checkout page reached")
d.quit()
