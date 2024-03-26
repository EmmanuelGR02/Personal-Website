## Name: `Emmanuel Gutierrez`

---

# CWE-798: Use of Hard-coded Credentials
    * 'The product contains hard-coded credentials, such as a password or cryptographic key, which it uses for its own inbound authentication, outboud communication to external components, or encryption of internal data. [Link CWE-798](https://cwe.mitre.org/data/definitions/798.html)`
 
---
 
### CPE: `cpe:/a:egr\_technologies:social\_fitness:1.0:\*:\*:\*:\*:\*:\*:\*`
    * The CPE corresponds to an application **(Social Fitness)**  developed by **EGR Technologies** which is on the **1.0** version.
    
    * The CWE put into my code was **CWE-798**, which made my code extremely vulnerable beacuase I was storing user passwords as plain text in my realtime firebase database. This meant that if an unauthorized user was able to get a hold of the database, they were able to long in into any of the users accounts no problem. I then used `SHA-256` hashing algorithm to store the hash of the user passwords. This can prevent unauthorized users from know the actual passwords of the users.   
 
