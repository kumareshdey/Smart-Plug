/ *start typing your code here */
singleButton({ name : " FAN ON ", action :"analogWrite", pin : "A0", value : "255",bgcolor:"Red"})
singleButton({ name : "LIGHT ON", action :"digitalWrite", pin : "0", value : "HIGH",bgcolor:"Black"})
singleButton({ name : "LIGHT OFF", action :"digitalWrite", pin : "0", value : "LOW"})