<template>
	<div class="wrap" id="wrap">
		<div class="logGet">
			<!-- 头部提示信息 -->
			<div class="logD logDtip">
				<p class="p1">登录</p>
			</div>
			<!-- 输入框 -->
			<i-form ref="formLogin" :model="formLogin" :rules="ruleLogin">
				<div class="lgD">
					<FormItem prop="user">
						<i-input placeholder="输入用户名" v-model="formLogin.user" style="width: 100%;" size="large">
							<Icon type="ios-contact" slot="prefix" size="30" />
						</i-input>
					</FormItem>
				</div>
				<div class="lgD">
					<FormItem prop="password">
						<i-input placeholder="输入用户密码" type="password" v-model="formLogin.password" style="width: 100%;" size="large">
							<Icon type="md-lock" slot="prefix" size="30" />
						</i-input>
					</FormItem>
				</div>
				<div class="logC">
					<FormItem>
						<a><button @click="login('formLogin')">登 录</button></a>
						<span id="error" hidden="hidden" style="color: red;">用户名或密码错误，请重新输入</span>
					</FormItem>
				</div>
			</i-form>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			const validateUser = (rele, value, callback) => {
				if (value === '') {
					callback(new Error('请输入用户名！'));
				} else {
					callback();
				}
			};
			const validatePass = (rele, value, callback) => {
				if (value === '') {
					callback(new Error('请输入用户密码！'));
				} else {
					callback();
				}
			}
			return {
				user: '',

				formLogin: {
					user: '',
					password: ''
				},
				ruleLogin: {
					user: [{
						validator: validateUser,
						trigger: 'blur'
					}],
					password: [{
						validator: validatePass,
						trigger: 'blur'
					}]
				}
			};
		},
		methods: {
			login(values) {
				this.$refs[values].validate((valid) => {
					if(valid) {
						if(this.formLogin.user !== 'admin' || this.formLogin.password !== '123456') {
							document.getElementById('error').hidden = '';
						}else {
							document.getElementById('error').hidden = 'hidden';
						}
					}
				})
			}
		}
	}
</script>

<style>
	body {
		background-image: url('https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1584094198,1651107084&fm=11&gp=0.jpg');
		background-size: 100%;
		background-repeat: no-repeat;
		background-position: center center;
	}

	* {
		margin: 0;
		padding: 0;
	}

	#wrap {
		height: 600px;
		width: 100%;
		background-position: center center;
		position: relative;

	}

	#head {
		height: 120px;
		width: 100;
		background-color: #66CCCC;
		text-align: center;
		position: relative;
	}

	#wrap .logGet {
		height: 408px;
		width: 368px;
		position: absolute;
		background-color: #FFFFFF;
		top: 100px;
		right: 15%;
	}

	.logC a button {
		width: 100%;
		height: 45px;
		background-color: #138FEF;
		border: none;
		color: white;
		font-size: 18px;
	}

	.logGet .logD.logDtip .p1 {
		display: inline-block;
		font-size: 28px;
		margin-top: 30px;
		width: 86%;
	}

	#wrap .logGet .logD.logDtip {
		width: 86%;
		border-bottom: 1px solid #138FEF;
		margin-bottom: 60px;
		margin-top: 0px;
		margin-right: auto;
		margin-left: auto;
	}

	#wrap .logGet .lgD {
		width: 86%;
		position: relative;
		margin-bottom: 30px;
		margin-top: 30px;
		margin-right: auto;
		margin-left: auto;
	}

	#wrap .logGet .logC {
		width: 86%;
		margin-top: 0px;
		margin-right: auto;
		margin-bottom: 0px;
		margin-left: auto;
	}


	.title {
		font-family: "宋体";
		color: #FFFFFF;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		/* 使用css3的transform来实现 */
		font-size: 36px;
		height: 40px;
		width: 30%;
	}

	.copyright {
		font-family: "宋体";
		color: #FFFFFF;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		/* 使用css3的transform来实现 */
		height: 60px;
		width: 40%;
		text-align: center;
	}
</style>
