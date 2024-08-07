mkdir ~/.webscript
echo 'PATH=$PATH:$HOME/.webscript' >> ~/.bashrc
cp -r $PWD/* ~/.webscript
# rm -r $PWD