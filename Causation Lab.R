fire <- sample(
  c(0,1),
  size = 10000,
  replace = T
)
  
smoke <- ifelse(
  fire == 1,
  sample(
    c(0,1),
    size = 10000,
    replace = T,
    prob = c(0.05, 0.95)
  ),
  sample(
    c(0,1),
    size = 10000,
    replace = T,
    prob = c(0.8, 0.2)
  )
)
  
alarm <- ifelse(
  smoke == 1,
  sample(
    c(0,1),
    size = 10000,
    replace = T,
    prob = c(0.01, 0.99)
  ),
  sample(
    c(0,1),
    size = 10000,
    replace = T,
    prob = c(0.99, 0.01)
  )
)
  
  
data <- data.frame(
  fire = fire,
  smoke = smoke,
  alarm = smoke
)

model <- glm(
  alarm ~ fire + smoke, 
  data = data,
  family = quasibinomial()
)

summary(model)

exp(model$coefficients[2])/(exp(model$coefficients[2])+1)




age <- sample(
  c(5:10),
  size = 10000,
  replace = T
)
  
  
shoe <- age + rnorm(10,000)
  
  
reading <- age*2 - 5 + rnorm(10,000)*1.5
  
  
data <- data.frame(
  age = age,
  shoe = shoe, 
  reading = reading
)

View(data)


model = lm(
  reading ~ shoe,
  data = data
)

summary(model)

model <- lm(
  reading ~ shoe + age,
  data = data
)


summary(model)



talent  <- rnorm(10000)
  
  
beauty <- rnorm(10000)
  
  
celebrity <- ifelse(
  talent + beauty > 2,
  1,
  0
)
  

data <- data.frame(
  talent = talent, 
  beauty = beauty, 
  celebrity = celebrity
)


model = glm(
  celebrity ~ beauty,
  data = data,
  family = quasibinomial()
)

summary(model)


model = lm(
  beauty ~ talent + celebrity,
  data = data
)

 
summary(model)
