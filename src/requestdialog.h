#ifndef REQUESTDIALOG_H
#define REQUESTDIALOG_H

#include <QDialog>
#include "mainwindow.h"

namespace Ui {
class RequestDialog;
}

class RequestDialog : public QDialog
{
    Q_OBJECT

public:
    explicit RequestDialog(QWidget *parent = nullptr);
    ~RequestDialog();

    static void showRequestZcash(MainWindow* main);

private:
    Ui::RequestDialog *ui;
};

#endif // REQUESTDIALOG_H
