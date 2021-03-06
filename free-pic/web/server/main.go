package main

import (
	"log"

	"github.com/gin-gonic/gin"
	"qn/server/global"
	"qn/server/initalize"
	"qn/server/middlewares"
	"qn/server/routers"
)

func main() {
	global.MAC = initalize.InitMAC()
	//global.QN_DB = initalize.GormMysql()
	//initalize.MysqlTables(global.QN_DB)
	global.RANK_DB = initalize.ConnectRedis()
	r := gin.Default()
	r.Use(middlewares.Cors())
	routers.LoadRouter(r)
	err := r.Run(":8081")
	if err != nil {
		log.Fatal("run err")
	}
}
