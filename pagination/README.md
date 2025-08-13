# Pagination Project

## Description

This project demonstrates how to implement **pagination** for a dataset in Python. It includes:

- Basic pagination using page and page_size parameters
- Hypermedia-style pagination with metadata
- Deletion-resilient pagination that ensures consistent results even when data changes between requests

The dataset used is `Popular_Baby_Names.csv` which contains baby name records from NYC.

---

## Learning Objectives

At the end of this project, you should be able to explain:

- How to paginate a dataset using page and page_size
- How to provide hypermedia pagination metadata
- How to make pagination resilient to deletion of dataset entries

---

## Requirements

- Ubuntu 20.04 LTS
- Python 3.9
- PEP8 (pycodestyle 2.5.*)
- All scripts must be executable and start with: `#!/usr/bin/env python3`
- All modules and functions must contain proper documentation
- Type annotations are required

---

##  File Structure

```bash
.
├── 0-main.py
├── 0-simple_helper_function.py
├── 1-main.py
├── 1-simple_pagination.py
├── 2-main.py
├── 2-hypermedia_pagination.py
├── 3-main.py
├── 3-hypermedia_del_pagination.py
├── Popular_Baby_Names.csv
└── README.md
