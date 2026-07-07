# this script creates spectral curves plot from created Landsat .csv files

library(ggplot2)
library(rChoiceDialogs)
library(lubridate)

# Define path to a working directory in your system
vstupni_adresar <- rchoose.dir(getwd(), "Set path to a directory where original data are located exported from GEE for Landsat bands")
prac_adresar <- setwd(vstupni_adresar)

# Create a list of .csv files in selected directory
csv_files <- list.files(path=getwd(), pattern=".csv", recursive=FALSE)

# For loop in order to create multiple plots for each unique pixel ID
for(i in csv_files){
  # read the data
  the_data <- read.csv(i) 
  
  # Conver Time column in to proper Date Format
  the_data$Time <- ymd(the_data$Time)
  
  # plot data
  sp_curve <- ggplot(data=the_data, aes(x=Time)) + geom_line(aes(y=EVI, color="EVI"))+
    geom_line(aes(y=NDVI, color="NDVI"))+
    geom_line(aes(y=NDWI, color="NDWI"))+
    ylab("Reflectance")+
    scale_color_manual(name="Vegetation Indices", values=c("EVI"="red", "NDVI"="green","NDWI"="blue"), 
                       labels=c("EVI", "NDVI", "NDWI"))
  
  sp_curve
  
  # Save Results to disk for Each Unique Pixel ID
  # Define File Name
  name1 <- gsub(pattern = "\\.csv$", "", i)
  name2 <- paste("Spectral_Response", name1, ".jpeg")
  disk_export <- ggsave(plot=sp_curve, filename=name2, dpi=300, units="px", width=3000, height=2000)
  
  
}


#################################################################################################################################################################################

