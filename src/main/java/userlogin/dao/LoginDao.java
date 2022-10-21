package userlogin.dao;

public interface LoginDao {
	boolean validate(String username,String password);
	public int insertUser(String name,String empid,String username,String phone,String password);
	public boolean isExist(String username,String empid);
}
