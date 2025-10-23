---
title: PEcAn 1.5.0 Released
authors: [tony_gardella]
tags: [release, pecan]
---

PEcAn version 1.5.0 has been released with several new features and improvements.

<!--truncate-->

## Added

- `PEcAn.utils::download.file()` to allow for use of alternative FTP programs
- `downloadAmeriflux` and `downloadNARR` to make use of `PEcAn.utils::download.file()`
- `-w` flag to `load.bety.sh` script to specify the URL to fetch the data from
- New table `sites_cultivars` to betydb sync scripts (dump and load)
- Docker container scripts (.yml) to create docker container for PEcAn
- The configuration edit page to allow easy modification of config via web interface
- Thredds server documentation and catalog generating script

## Changed

- `upscale_met` now accepts ~any valid CF file (not just full years), retains correct time units, and respects the previously ignored overwrite parameter
- Better date handling in BioCro functions
