# Generated by Selenium IDE
import pytest
import time
import json
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.action_chains import ActionChains
from selenium.webdriver.support import expected_conditions
from selenium.webdriver.support.wait import WebDriverWait
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.desired_capabilities import DesiredCapabilities

class TestTest1():
  def setup_method(self, method):
    self.driver = webdriver.Chrome()
    self.vars = {}
  
  def teardown_method(self, method):
    self.driver.quit()
  
  def test_test1(self):
    self.driver.get("https://insat.rnu.tn/")
    self.driver.set_window_size(699, 768)
    self.driver.find_element(By.ID, "Layer_1").click()
    self.driver.find_element(By.CSS_SELECTOR, ".w-full:nth-child(2) > div > .text-center").click()
    self.driver.find_element(By.LINK_TEXT, "CURSUS DE FORMATION").click()
    self.driver.find_element(By.CSS_SELECTOR, "a:nth-child(7) > .flex").click()
    self.driver.execute_script("window.scrollTo(0,0)")
  