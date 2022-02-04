library(tidyverse)
library(sf)
library(mapview)
library(tigris)
library(censusapi )


point <- 
  c(-122.16642, 37.3839) %>% 
  st_point() %>% 
  st_sfc() %>% 
  st_set_crs(4326)