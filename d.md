## Name: `Emmanuel Gutierrez`

---

* # CWE-798: `Use of Hard-coded Credentials`
    * `The code or its services used contain very sensitive data that is hard coded.` [Link CWE-798](https://cwe.mitre.org/data/definitions/798.html)
    * `It is not in the top 10 KEV weaknesses.`
    * **Severity of the weakness:** `This is a very severe weakness because you are essentially leaving extremely sentitive user data without any protection, making it easy for attackers to read and steal.`
    * **Personal experience:** `I knew it was a bad thing to do that, but this is just a personal project. I had no experience with kotlin, database or app development at all. I just wanted to build the app and then worry about password protection later since I was the only one able to use the app. Then this class taught me hashing, so I implemented it in to my application.`
    * **What I could have done:** `I definitely should have done more reasearch on data protection. I was only planning on making a simple app, but it soon became 4,000+ lines of code long that I did not pay attention to the saftey features.`
---

* ### CPE: `cpe:/a:egr_technologies:social_fitness:1.0:*:*:*:*:*:*:*`
    * The CPE corresponds to an application **(Social Fitness)**  developed by **EGR Technologies** which is on the **1.0** version.

    * The CWE put into my code was **CWE-798**, which made my code extremely vulnerable beacuase I was storing user passwords as plain text in my realtime firebase database. This meant that if an unauthorized user was able to get a hold of the database, they were able to long in into any of the users accounts no problem. I then used `SHA-256` hashing algorithm to store the hash of the user passwords. This can prevent unauthorized users from know the actual passwords of the users.

    * **CVE-2023-27169:** `Xpand IT Write-back manager v2.3.1 uses a hardcoded salt in license class configuration which leads to the generation of a hardcoded and predictable symmetric encryption keys for license generation and validation.` [Link CVE](https://nvd.nist.gov/vuln/detail/CVE-2023-27169)
